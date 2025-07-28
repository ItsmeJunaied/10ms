'use client'
import { useGetSectionByTypeQuery } from '@/lib/ieltsApi';
import { Check } from 'lucide-react';
import React from 'react';

const ClassRequirements = () => {
    const {data: requirements, isLoading, error} = useGetSectionByTypeQuery({lang: 'en', sectionType: 'requirements'})
    if (isLoading) return <div>Loading requirements...</div>;
    if (error) return <div>Error loading requirements.</div>;
    if (!requirements) return <div>No requirements found.</div>;
    return (
        <div>
            <div className="bg-white rounded-lg border p-6">
                <h2 className="text-2xl font-bold mb-6">
                    {requirements.name || 'ক্লাস করার জন্য প্রয়োজন হবে'}
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
                            <span className="text-sm">ইন্টারনেট সংযোগ (ওয়াইফাই বা মোবাইল ইন্টারনেট), স্মার্টফোন অথবা পিসি</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ClassRequirements;