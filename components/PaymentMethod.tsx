'use client'
import { useGetSectionByTypeQuery } from "@/lib/ieltsApi";
import React from "react";
import { useSelector } from 'react-redux';
import type { RootState } from '@/lib/store';
import { t } from "@/lib/Translation";

const PaymentMethod = () => {
    const lang = useSelector((state: RootState) => state.language.lang) as 'en' | 'bn';
    const {data: how_to_pay, isLoading, error} = useGetSectionByTypeQuery({lang: lang, sectionType: 'how_to_pay'})
    
    if (isLoading) return <div>{t('paymentMethod.loading', lang)}</div>;
    if (error) return <div>{t('paymentMethod.error', lang)}</div>;
    if (!how_to_pay) return <div>{t('paymentMethod.noData', lang)}</div>;
    
    return (
        <div>
            <div className="bg-white rounded-lg border p-6">
                <h2 className="text-2xl font-bold mb-6">
                    {how_to_pay.name || t('paymentMethod.title', lang)}
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                    {Array.isArray(how_to_pay.values) && how_to_pay.values.length > 0 ? (
                        how_to_pay.values.map((item: { id: string, text: string, video_url?: string }) => (
                            <div key={item.id} className="mb-2">
                                <p className="text-sm text-gray-700">{item.text}</p>
                                {item.video_url && (
                                    <a href={item.video_url} target="_blank" rel="noopener noreferrer" className="text-green-600 underline ml-2">
                                        {t('paymentMethod.watchVideo', lang)}
                                    </a>
                                )}
                            </div>
                        ))
                    ) : (
                        <p className="text-sm text-gray-700">
                            {t('paymentMethod.defaultText', lang)}
                            <a href="#" className="text-green-600 underline">
                                {t('paymentMethod.watchThisVideo', lang)}
                            </a>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;