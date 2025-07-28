// api/ieltsCourseApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from './store';

// Define TypeScript interfaces for the API response
interface MediaItem {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url?: string;
}

interface ChecklistItem {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

interface Section {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: any[];
}
interface SeoData {
  defaultMeta: Array<{
    content: string;
    type: string;
    value: string;
  }>;
  description: string;
  keywords: string[];
  schema: Array<{
    meta_name: string;
    meta_value: string;
    type: string;
  }>;
  title: string;
}

interface CourseData {
  slug: string;
  id: number;
  title: string;
  description: string;
  media: MediaItem[];
  checklist: ChecklistItem[];
  sections: Section[];

}

export const ieltsCourseApi = createApi({
  reducerPath: 'ieltsCourseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.10minuteschool.com/discovery-service/api/v1/products/',
    prepareHeaders: (headers) => {
      headers.set('X-TENMS-SOURCE-PLATFORM', 'web');
      headers.set('Accept', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Full course data endpoint
    getCourseData: builder.query<CourseData, { lang: 'en' | 'bn' }>({
      query: ({ lang }) => ({
        url: 'ielts-course',
        params: { lang },
      }),
      transformResponse: (response: any) => response.data,
    }),

    // Specific data endpoints
    getCourseBasicInfo: builder.query({
      query: ({ lang }) => ({
        url: 'ielts-course',
        params: { lang },
      }),
      transformResponse: (response: any) => ({
        id: response.data.id,
        title: response.data.title,
        description: response.data.description,
        slug: response.data.slug
      }),
    }),

    getCourseMedia: builder.query<MediaItem[], { lang: 'en' | 'bn' }>({
      query: ({ lang }) => ({
        url: 'ielts-course',
        params: { lang },
      }),
      transformResponse: (response: any) => response.data.media,
    }),

    getCourseChecklist: builder.query<ChecklistItem[], { lang: 'en' | 'bn' }>({
      query: ({ lang }) => ({
        url: 'ielts-course',
        params: { lang },
      }),
      transformResponse: (response: any) => response.data.checklist,
    }),

    getSectionByType: builder.query<Section | undefined, { lang: 'en' | 'bn'; sectionType: string }>({
      query: ({ lang }) => ({
        url: 'ielts-course',
        params: { lang },
      }),
      transformResponse: (response: any, _, args) => 
        response.data.sections.find((section: Section) => section.type === args.sectionType),
    }),

    getSectionTypes: builder.query<string[], { lang: 'en' | 'bn' }>({
      query: ({ lang }) => ({
        url: 'ielts-course',
        params: { lang },
      }),
      transformResponse: (response: any) => {
        return response.data.sections.map((section: Section) => section.name);
      },
    }),

    getCourseSeo: builder.query<SeoData, { lang: 'en' | 'bn' }>({
      query: ({ lang }) => ({
        url: 'ielts-course',
        params: { lang },
      }),
      transformResponse: (response: any) => response.data.seo,
    }),
  }),
});

export const {
  useGetCourseDataQuery,
  useGetCourseBasicInfoQuery,
  useGetCourseMediaQuery,
  useGetCourseChecklistQuery,
  useGetSectionByTypeQuery,
  useGetSectionTypesQuery,
  useGetCourseSeoQuery
} = ieltsCourseApi;