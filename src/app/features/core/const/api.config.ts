import {environment} from '../../../../environments/environment';

export const API_CONFIG = {
  baseUrl: environment.apiUrl,
  userApi: '/user-api',
  storageApi: '/storage-api',
  paymentApi: '/payment-api',
  authorizationApi: '/authorization-api',
  emailApi: '/email-api',
};

export const PAYMENT_ENDPOINT = {
  categoria: API_CONFIG.baseUrl + API_CONFIG.paymentApi + '/categorias',
  carrinho: API_CONFIG.baseUrl + API_CONFIG.paymentApi + '/carrinhos',
  produto: API_CONFIG.baseUrl + API_CONFIG.paymentApi + '/produtos',
  pedido: API_CONFIG.baseUrl + API_CONFIG.paymentApi + '/pedidos',
};

export const USER_ENDPOINT = {
  user: API_CONFIG.baseUrl + API_CONFIG.userApi + '/users',
  estado: API_CONFIG.baseUrl + API_CONFIG.userApi + '/estados',
  cidade: API_CONFIG.baseUrl + API_CONFIG.userApi + '/cidades',
};

export const STORAGE_ENDPOINT = {
  storage: API_CONFIG.baseUrl + API_CONFIG.storageApi + '/storages',
  metadata: API_CONFIG.baseUrl + API_CONFIG.storageApi + '/metadatas',
};

export const AUTHORIZATION_ENDPOINT = {
  auth: API_CONFIG.baseUrl + API_CONFIG.authorizationApi + '/auth',
  signup: API_CONFIG.baseUrl + API_CONFIG.authorizationApi + '/signup',
};

export const OAUTH2_REDIRECT_URI = 'http://localhost:4200/login'
