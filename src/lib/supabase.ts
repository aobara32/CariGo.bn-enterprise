import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Get environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim()
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim()
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim() || ''
const supabaseServiceRoleKey = import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY?.trim()

// Log environment variables for debugging
console.log('🔍 Supabase Environment Variables:')
console.log('  VITE_SUPABASE_URL:', supabaseUrl ? '✅ Set: ' + supabaseUrl : '❌ Missing')
console.log('  VITE_SUPABASE_ANON_KEY:', supabaseAnonKey ? '✅ Set (length: ' + supabaseAnonKey.length + ')' : '❌ Missing')
console.log('  VITE_API_BASE_URL:', apiBaseUrl ? '✅ Set: ' + apiBaseUrl : '⚠️ Not set (optional)')
console.log('  VITE_SUPABASE_SERVICE_ROLE_KEY:', supabaseServiceRoleKey ? '✅ Set' : '⚠️ Not set (optional)')

// Debug function to check environment variables
export const checkEnvVariables = () => {
  console.log('Environment Variables Check:')
  console.log('VITE_SUPABASE_URL:', supabaseUrl ? '✅ Set: ' + supabaseUrl : '❌ Missing')
  console.log('VITE_SUPABASE_ANON_KEY:', supabaseAnonKey ? '✅ Set (length: ' + supabaseAnonKey.length + ')' : '❌ Missing')
  console.log('VITE_API_BASE_URL:', apiBaseUrl ? '✅ Set: ' + apiBaseUrl : '⚠️ Not set (optional)')
  console.log('VITE_SUPABASE_SERVICE_ROLE_KEY:', supabaseServiceRoleKey ? '✅ Set' : '⚠️ Not set (optional)')
  
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('❌ Missing Supabase environment variables!')
    console.error('Please check your .env.local file')
    return false
  }
  
  console.log('✅ All required environment variables are set correctly')
  return true
}

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing Supabase environment variables. Please check your .env.local file.')
  // Don't throw error, just warn
  console.warn('⚠️ Supabase will not work without environment variables')
}

export const supabase: SupabaseClient | null = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Test connection
export const testSupabaseConnection = async () => {
  if (!supabase) {
    console.error('❌ Supabase is not initialized - check environment variables')
    console.error('VITE_SUPABASE_URL:', supabaseUrl)
    console.error('VITE_SUPABASE_ANON_KEY:', supabaseAnonKey ? 'Set' : 'Missing')
    return false
  }
  
  try {
    console.log('🔄 Testing Supabase connection...')
    console.log('Supabase URL:', supabaseUrl)
    
    // より詳細なエラーハンドリング（実際のテーブル名を使用）
    const { data, error, status, statusText } = await supabase
      .from('home_inquiries')
      .select('count')
      .limit(1)
    
    if (error) {
      console.error('❌ Supabase connection failed:')
      console.error('Error code:', error.code)
      console.error('Error message:', error.message)
      console.error('Error details:', error.details)
      console.error('Error hint:', error.hint)
      
      // テーブルが存在しない場合のメッセージ
      if (error.code === 'PGRST116' || error.message?.includes('relation') || error.message?.includes('does not exist')) {
        console.error('💡 Hint: The home_inquiries table does not exist in Supabase')
        console.error('💡 Please create the table using the SQL in SUPABASE_SETUP.md')
      }
      
      // RLSポリシーの問題
      if (error.code === '42501' || error.message?.includes('permission denied')) {
        console.error('💡 Hint: Row Level Security (RLS) policy issue')
        console.error('💡 Please check RLS policies in Supabase dashboard')
      }
      
      return false
    }
    
    console.log('✅ Supabase connection successful!')
    console.log('Response status:', status)
    console.log('Response data:', data)
    return true
  } catch (err) {
    console.error('❌ Supabase connection error:', err)
    if (err instanceof Error) {
      console.error('Error name:', err.name)
      console.error('Error message:', err.message)
    }
    return false
  }
}

// Database types
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  category: string
  subject: string
  message: string
}

export interface CareerApplicationData {
  name: string
  email: string
  phone?: string
  position: string
  experience: string // Mapped from portfolio
  motivation: string // Mapped from coverLetter
  resume_url: string // Mapped from linkedin
}

export interface SupportFormData {
  donation_amount: string
  custom_amount: string
  donor_name: string
  donor_email: string
  donor_phone: string
  donor_message: string
}

export interface InvestmentFormData {
  investment_type: string
  investment_amount: string
  investor_name: string
  investor_email: string
  investor_phone: string
  investor_company: string
  investor_message: string
}

// Database functions
export async function saveContactForm(data: ContactFormData) {
  if (!supabase) {
    throw new Error('Supabase is not initialized. Please check your environment variables.')
  }
  
  const { error } = await supabase
    .from('home_inquiries')
    .insert([
      {
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        category: data.category,
        title: data.subject,
        message: data.message,
      },
    ])

  if (error) throw error
}

export async function saveCareerApplication(data: CareerApplicationData) {
  if (!supabase) {
    throw new Error('Supabase is not initialized. Please check your environment variables.')
  }
  
  const { error } = await supabase
    .from('home_job_applications')
    .insert([
      {
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        position: data.position,
        portfolio: data.experience,
        cover_letter: data.motivation,
        linkedin: data.resume_url,
      },
    ])

  if (error) throw error
}

export async function saveSupportForm(data: SupportFormData) {
  if (!supabase) {
    throw new Error('Supabase is not initialized. Please check your environment variables.')
  }
  
  const { error } = await supabase
    .from('home_payments')
    .insert([
      {
        amount: parseFloat(data.donation_amount || data.custom_amount || '0'),
        name: data.donor_name,
        email: data.donor_email,
        phone: data.donor_phone,
        notes: data.donor_message,
      },
    ])

  if (error) throw error
}

export async function saveInvestmentForm(data: InvestmentFormData) {
  if (!supabase) {
    throw new Error('Supabase is not initialized. Please check your environment variables.')
  }
  
  const { error } = await supabase
    .from('home_investments')
    .insert([
      {
        investment_type: data.investment_type,
        amount: parseFloat(data.investment_amount || '0'),
        name: data.investor_name,
        email: data.investor_email,
        phone: data.investor_phone,
        notes: data.investor_message,
      },
    ])

  if (error) throw error
}

// Upload CV file to Supabase storage
export async function uploadCVFile(file: File, applicantEmail: string): Promise<string> {
  if (!supabase) {
    throw new Error('Supabase is not initialized. Please check your environment variables.')
  }

  // Generate unique filename
  const fileExt = file.name.split('.').pop()
  const fileName = `${Date.now()}_${applicantEmail.replace(/[^a-zA-Z0-9]/g, '_')}.${fileExt}`
  const filePath = `${fileName}`

  // Upload file to 'cv' bucket
  const { data, error } = await supabase.storage
    .from('cv')
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false
    })

  if (error) {
    console.error('Error uploading CV:', error)
    throw error
  }

  // Get public URL
  const { data: { publicUrl } } = supabase.storage
    .from('cv')
    .getPublicUrl(filePath)

  return publicUrl
}
