"use client";

import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, X, Check, AlertCircle } from "lucide-react";

const SubscriptionForm: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [qrValue, setQrValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [confirmationCode, setConfirmationCode] = useState<string>("");
  const [generatedCode, setGeneratedCode] = useState<string>("");
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  // Validate phone number
  const validatePhoneNumber = (number: string): boolean => {
    const phoneRegex = /^[0-9]{10,15}$/;
    return phoneRegex.test(number);
  };

  // Generate QR code with a random confirmation code
  const generateQRCode = () => {
    if (!validatePhoneNumber(phoneNumber)) {
      setError("❌ Please enter a valid phone number.");
      return;
    }
    setError("");
    setLoading(true);

    // Simulate a delay for QR code generation
    setTimeout(() => {
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedCode(code);

      const data = {
        phoneNumber: phoneNumber,
        code: code,
      };
      setQrValue(JSON.stringify(data));
      setLoading(false);
    }, 1000);
  };

  // Handle confirmation code submission
  const handleConfirmation = () => {
    if (confirmationCode === generatedCode) {
      setIsConfirmed(true);
      setError("");
    } else {
      setError("❌ Invalid confirmation code. Please try again.");
      setIsConfirmed(false);
    }
  };

  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen bg-gray-50 p-6">
      <Card className="w-full max-w-md shadow-2xl border border-gray-200 rounded-xl bg-white">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold text-gray-800">
            📱 Subscription Form
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {/* Phone Number Input */}
          <Input
            type="tel"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all text-black"
          />
          {error && (
            <div className="flex items-center justify-between bg-red-100 px-2 py-1 rounded-md">
              <p className="text-red-600 text-sm font-medium">{error}</p>
              <button
                onClick={() => setError("")}
                className="text-red-600 hover:text-red-800"
              >
                <X size={16} />
              </button>
            </div>
          )}
          {/* Generate QR Code Button */}
          <Button
            onClick={generateQRCode}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2" size={20} />{" "}
                Generating...
              </>
            ) : (
              "Generate QR Code"
            )}
          </Button>
          {/* QR Code Display */}
          {qrValue && (
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 border rounded-lg bg-gray-100 shadow-md">
                <QRCodeCanvas value={qrValue} size={200} level="H" />
              </div>
              <p className="text-sm text-gray-600">
                Scan the QR code to get the confirmation code.
              </p>
            </div>
          )}
          {/* Confirmation Code Input */}
          {qrValue && (
            <div className="flex flex-col gap-4">
              <Input
                type="text"
                placeholder="Enter confirmation code"
                value={confirmationCode}
                onChange={(e) => setConfirmationCode(e.target.value)}
                className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all text-black"
              />
              <Button
                onClick={handleConfirmation}
                className="w-full bg-green-600 hover:bg-green-700 transition-all"
              >
                Confirm
              </Button>
            </div>
          )}
          {/* Success Message */}
          {isConfirmed && (
            <div className="mt-4 p-4 bg-green-100 rounded-lg flex items-center gap-2">
              <Check className="text-green-700" size={20} />
              <p className="text-green-700 text-sm font-medium">
                Thank you! Your subscription with phone number {phoneNumber} is
                confirmed.
              </p>
            </div>
          )}
          {/* Error Message for Invalid Code */}
          {error && confirmationCode && (
            <div className="mt-4 p-4 bg-red-100 rounded-lg flex items-center gap-2">
              <AlertCircle className="text-red-700" size={20} />
              <p className="text-red-700 text-sm font-medium">{error}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SubscriptionForm;
