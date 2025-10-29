import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

// 国コードリスト（ブルネイをトップに配置）
const countryCodes = [
  { code: "BN", dialCode: "+673", name: "Brunei", flag: "🇧🇳" },
  { code: "MY", dialCode: "+60", name: "Malaysia", flag: "🇲🇾" },
  { code: "SG", dialCode: "+65", name: "Singapore", flag: "🇸🇬" },
  { code: "ID", dialCode: "+62", name: "Indonesia", flag: "🇮🇩" },
  { code: "TH", dialCode: "+66", name: "Thailand", flag: "🇹🇭" },
  { code: "PH", dialCode: "+63", name: "Philippines", flag: "🇵🇭" },
  { code: "VN", dialCode: "+84", name: "Vietnam", flag: "🇻🇳" },
  { code: "US", dialCode: "+1", name: "United States", flag: "🇺🇸" },
  { code: "GB", dialCode: "+44", name: "United Kingdom", flag: "🇬🇧" },
  { code: "AU", dialCode: "+61", name: "Australia", flag: "🇦🇺" },
  { code: "JP", dialCode: "+81", name: "Japan", flag: "🇯🇵" },
  { code: "KR", dialCode: "+82", name: "South Korea", flag: "🇰🇷" },
  { code: "CN", dialCode: "+86", name: "China", flag: "🇨🇳" },
  { code: "IN", dialCode: "+91", name: "India", flag: "🇮🇳" },
];

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
}

export function PhoneInput({
  value,
  onChange,
  placeholder = "8XXX XXXX",
  className = "",
  required = false,
}: PhoneInputProps) {
  // 国コードと電話番号を解析
  const parsePhone = (fullPhone: string) => {
    const match = fullPhone.match(/^(\+\d+)\s*(.*)$/);
    if (match) {
      return { dialCode: match[1], phone: match[2] };
    }
    return { dialCode: countryCodes[0].dialCode, phone: fullPhone };
  };

  const { dialCode, phone } = parsePhone(value || "");
  
  // 現在の国を取得
  const currentCountry = countryCodes.find((c) => c.dialCode === dialCode) || countryCodes[0];

  const handleDialCodeChange = (code: string) => {
    const country = countryCodes.find((c) => c.code === code);
    if (country) {
      onChange(`${country.dialCode} ${phone}`.trim());
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPhone = e.target.value;
    onChange(`${dialCode || countryCodes[0].dialCode} ${newPhone}`.trim());
  };

  return (
    <div className="flex gap-2">
      <Select value={currentCountry.code} onValueChange={handleDialCodeChange}>
        <SelectTrigger className="w-[140px] border-2 focus:border-primary transition-colors">
          <SelectValue>
            <div className="flex items-center gap-2">
              <span className="text-lg">{currentCountry.flag}</span>
              <span className="text-sm">{currentCountry.dialCode}</span>
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="max-h-[300px]">
          {countryCodes.map((country) => (
            <SelectItem key={country.code} value={country.code}>
              <div className="flex items-center gap-2">
                <span className="text-lg">{country.flag}</span>
                <span className="w-16 text-sm">{country.dialCode}</span>
                <span className="text-sm">{country.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        type="tel"
        value={phone}
        onChange={handlePhoneChange}
        placeholder={placeholder}
        className={`flex-1 border-2 focus:border-primary transition-colors ${className}`}
        required={required}
      />
    </div>
  );
}

