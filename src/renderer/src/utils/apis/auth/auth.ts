import http from '../../advertisement'

export const login = (data: any) => {
  return http.post('/api/admin/login', data)
}
