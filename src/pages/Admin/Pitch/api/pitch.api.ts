import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPitch } from '../types';

const pitchApi = createApi({
    reducerPath: 'pitchApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    // Key auto re-fech khi theem sua xoa
    tagTypes: ['Pitchs'],
    endpoints: (builder) => ({
        getAllPitch: builder.query<{ data: IPitch[] }, void>({
            query: () => '/api/pitch',
            // Khai bao key goi lại api khi thêm sửa xóa
            providesTags: ['Pitchs'],
        }),
        getPitchById: builder.query<{ data: IPitch }, string>({
            query: (id) => '/api/pitch/' + id,
            // Thời gian cache dữ liệu 10s, sẽ ko gọi lại api nếu đã gọi lần đầu sau 10s, mặc định 60s
            keepUnusedDataFor: 10,
        }),
        newPitch: builder.mutation<{ data: IPitch }, IPitch>({
            query: (data) => ({ url: '/api/pitch', method: 'POST', body: data }),
            // Thêm xong gọi lại api trên
            invalidatesTags: ['Pitchs'],
        }),
        updatePitch: builder.mutation<{ data: IPitch }, IPitch>({
            query: (data) => ({ url: '/api/pitch/' + data._id, method: 'PUT' }),
            invalidatesTags: ['Pitchs'],
        }),
        deletePitch: builder.mutation<{ data: IPitch }, string>({
            query: (id) => ({ url: '/api/pitch/' + id, method: 'DELETE' }),
            invalidatesTags: ['Pitchs'],
        }),
    }),
});

export const { useGetAllPitchQuery, useGetPitchByIdQuery, useNewPitchMutation, useUpdatePitchMutation, useDeletePitchMutation } = pitchApi;
export default pitchApi;
