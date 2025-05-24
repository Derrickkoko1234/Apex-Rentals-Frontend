export interface ApiResponse<T> {
  status: boolean;
  message: string;
  data: T;
}

export interface Pagination<T> {
  currentPage: number;
  totalPages: number;
  total: number;
  data: T[];
}
