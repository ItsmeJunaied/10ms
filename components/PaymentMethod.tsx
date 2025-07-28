'use client'
import { useGetSectionByTypeQuery } from "@/lib/ieltsApi";
import React from "react";

const PaymentMethod = () => {
    const {data: how_to_pay, isLoading, error} = useGetSectionByTypeQuery({lang: 'en', sectionType: 'how_to_pay'})
    if (isLoading) return <div>Loading payment methods...</div>;
    if (error) return <div>Error loading payment methods.</div>;
    if (!how_to_pay) return <div>No payment method data found.</div>;
    return (
        <div>
            <div className="bg-white rounded-lg border p-6">
                <h2 className="text-2xl font-bold mb-6">{how_to_pay.name || 'যেভাবে পেমেন্ট করবেন'}</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                    {Array.isArray(how_to_pay.values) && how_to_pay.values.length > 0 ? (
                        how_to_pay.values.map((item: { id: string, text: string, video_url?: string }) => (
                            <div key={item.id} className="mb-2">
                                <p className="text-sm text-gray-700">{item.text}</p>
                                {item.video_url && (
                                    <a href={item.video_url} target="_blank" rel="noopener noreferrer" className="text-green-600 underline ml-2">
                                        ভিডিও দেখুন
                                    </a>
                                )}
                            </div>
                        ))
                    ) : (
                        <p className="text-sm text-gray-700">
                            কীভাবে পেমেন্ট করবেন তা বিস্তারিত জানতে{' '}
                            <a href="#" className="text-green-600 underline">
                                এই ভিডিওটি দেখুন
                            </a>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;
