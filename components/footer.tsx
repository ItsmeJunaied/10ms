'use client'
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { useSelector } from 'react-redux';
import type { RootState } from '@/lib/store';
import { t } from "@/lib/Translation";

export default function Footer() {
  const lang = useSelector((state: RootState) => state.language.lang) as 'en' | 'bn';

  return (
    <footer className="bg-white ">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and App Downloads */}
          <div className="space-y-6">
            <div>
              <Image src="/10ms-logo.svg" alt="10 Minute School" width={120} height={40} className="h-8 w-auto mb-4" />
              <p className="text-gray-600 text-sm">{t('footer.tagline', lang)}</p>
            </div>

            <div className="flex flex-row space-x-2">
              <div className="flex flex-row items-center space-x-2">
                <img src="/ios-store-icon.jfif" alt="Google Play" className="h-10" />
              </div>
              <div className="flex items-center space-x-2">
                <img src="/google-play-icon.jfif" alt="App Store" className="h-10" />
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{t('footer.company.title', lang)}</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  {t('footer.company.career', lang)}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  {t('footer.company.joinAsTeacher', lang)}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  {t('footer.company.joinAsAffiliate', lang)}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  {t('footer.company.privacyPolicy', lang)}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  {t('footer.company.refundPolicy', lang)}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  {t('footer.company.termsOfUse', lang)}
                </a>
              </li>
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{t('footer.others.title', lang)}</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  {t('footer.others.blog', lang)}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  {t('footer.others.bookStore', lang)}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  {t('footer.others.freeNotes', lang)}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  {t('footer.others.jobPrep', lang)}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  {t('footer.others.satelliteSchools', lang)}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  {t('footer.others.freeAdmission', lang)}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{t('footer.contact.title', lang)}</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div>
                <p className="font-medium">{t('footer.contact.call', lang)}</p>
              </div>
              <div>
                <p className="font-medium">{t('footer.contact.whatsapp', lang)}</p>
              </div>
              <div>
                <p className="font-medium">{t('footer.contact.facebook', lang)}</p>
              </div>
              <div>
                <p className="font-medium">{t('footer.contact.email', lang)}</p>
              </div>

              <div className="flex space-x-3 pt-4">
                <a href="#" className="bg-gray-800 text-white p-2 rounded hover:bg-gray-700">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="bg-gray-800 text-white p-2 rounded hover:bg-gray-700">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="bg-gray-800 text-white p-2 rounded hover:bg-gray-700">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="bg-gray-800 text-white p-2 rounded hover:bg-gray-700">
                  <Youtube className="h-4 w-4" />
                </a>
                <a href="#" className="bg-gray-800 text-white p-2 rounded hover:bg-gray-700">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-2.08v2.44a4.83 4.83 0 01-3.77 4.25 4.83 4.83 0 013.77 4.25V15h2.08v-2.06a4.83 4.83 0 013.77-4.25z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-gray-600 text-sm">{t('footer.copyright', lang)}</p>
        </div>
      </div>
    </footer>
  );
}