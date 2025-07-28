'use client'
import { Phone } from "lucide-react";
import { useSelector } from 'react-redux';
import type { RootState } from '@/lib/store';
import { t } from "@/lib/Translation";

const Contact_Section = () => {
    const lang = useSelector((state: RootState) => state.language.lang) as 'en' | 'bn';

    return (
        <div>
            <div className="bg-white rounded-lg border p-6">
                <h2 className="text-2xl font-bold mb-6">
                    {t('contactSection.title', lang)}
                </h2>

                <div className="border border-gray-200 rounded-lg p-4 text-center">
                    <div className="flex items-center justify-center text-green-600">
                        <Phone className="h-5 w-5 mr-2" />
                        <span className="font-medium">{t('contactSection.callText', lang)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact_Section;