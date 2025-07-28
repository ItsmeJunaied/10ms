'use client'
import { useGetSectionByTypeQuery } from '@/lib/ieltsApi';
import { Check } from 'lucide-react';
import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/lib/store';
import { t } from '@/lib/Translation';

const ClassRequirements = () => {
    const lang = useSelector((state: RootState) => state.language.lang) as 'en' | 'bn';
    const {data: requirements, isLoading, error} = useGetSectionByTypeQuery({ lang: lang, sectionType: 'requirements' })
    
    if (isLoading) return <div>{t('classRequirements.loading', lang)}</div>;
    if (error) return <div>{t('classRequirements.error', lang)}</div>;
    if (!requirements) return <div>{t('classRequirements.noData', lang)}</div>;
    
    return (
        <div>
            <div className="bg-white rounded-lg border p-6">
                <h2 className="text-2xl font-bold mb-6">
                    {requirements.name || t('classRequirements.title', lang)}
                </h2>
                <div className="space-y-3">
                    {Array.isArray(requirements.values) && requirements.values.length > 0 ? (
                        requirements.values.map((item: { id: string, text: string }) => (
                            <div className="flex items-start" key={item.id}>
                                <Check className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{item.text}</span>
                            </div>
                        ))
                    ) : (
                        <div className="flex items-start">
                            <Check className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{t('classRequirements.defaultRequirement', lang)}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ClassRequirements;