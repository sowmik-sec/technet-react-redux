import { api } from '@/redux/api/apiSlice';

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({ url: '/products' }),
    }),
    singleProduct: builder.query<object, string>({
      query: (id) => ({ url: `/product/${id}` }),
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['comments'],
    }),
    getComment: builder.query<object, string>({
      query: (id) => ({ url: `/comment/${id}` }),
      providesTags: ['comments'],
    }),
  }),
});

export const {
  useGetCommentQuery,
  useGetProductsQuery,
  usePostCommentMutation,
  useSingleProductQuery,
} = productApi;
