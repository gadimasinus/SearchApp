export interface TextSearchResult {
  kind: string;
  url: Url;
  queries: Queries;
  context: Context;
  searchInformation: SearchInformation;
  items: Item[];
}

export interface Item {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  cacheId: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: Pagemap;
}

export interface Pagemap {
  cse_thumbnail?: Csethumbnail[];
  metatags: Metatag[];
  cse_image: Cseimage[];
  sitenavigationelement?: Sitenavigationelement[];
  hcard?: Hcard[];
  person?: Person[];
  webpage?: Webpage[];
  wpheader?: Wpheader[];
  country?: Country[];
  table?: Table[];
  imageobject?: Imageobject[];
  organization?: Organization[];
  newsarticle?: Newsarticle[];
  listitem?: Listitem[];
}

export interface Listitem {
  item: string;
  name: string;
  position: string;
}

export interface Newsarticle {
  mainentityofpage: string;
  thumbnailurl: string;
  inlanguage?: string;
  datepublished: string;
  datemodified: string;
  articlesection: string;
  keywords: string;
  description: string;
  url?: string;
  headline: string;
  author?: string;
  articlebody: string;
  alternativeheadline?: string;
  about?: string;
}

export interface Organization {
  name: string;
  url?: string;
}

export interface Imageobject {
  url?: string;
  width?: string;
  height?: string;
  contenturl?: string;
  caption?: string;
  description?: string;
}

export interface Table {
  about: string;
}

export interface Country {
  name: string;
}

export interface Wpheader {
  image: string;
}

export interface Webpage {
  name: string;
  description: string;
}

export interface Person {
  role?: string;
  name?: string;
  image?: string;
  givenname?: string;
  birthdate?: string;
  birthplace?: string;
  award?: string;
  description?: string;
  url?: string;
}

export interface Hcard {
  fn: string;
  nickname?: string;
  url?: string;
  url_text?: string;
  bday?: string;
  role?: string;
  category?: string;
}

export interface Sitenavigationelement {
  name: string;
  url: string;
}

export interface Cseimage {
  src: string;
}

export interface Metatag {
  'og:title'?: string;
  'og:type'?: string;
  'og:url'?: string;
  'fb:app_id'?: string;
  'og:site_name'?: string;
  'og:image'?: string;
  'application-name'?: string;
  'msapplication-tilecolor'?: string;
  'msapplication-tileimage'?: string;
  referrer?: string;
  'google-signin-client_id'?: string;
  'p:domain_verify'?: string;
  'msvalidate.01'?: string;
  'og:description'?: string;
  'twitter:title'?: string;
  'twitter:description'?: string;
  'twitter:site'?: string;
  'twitter:domain'?: string;
  'twitter:app:name:iphone'?: string;
  'twitter:app:id:iphone'?: string;
  'twitter:app:name:googleplay'?: string;
  'twitter:app:id:googleplay'?: string;
  'twitter:widgets:csp'?: string;
  'fb:pages'?: string;
  'msapplication-config'?: string;
  'swift-page-name'?: string;
  'swift-page-section'?: string;
  'al:ios:url'?: string;
  'al:ios:app_store_id'?: string;
  'al:ios:app_name'?: string;
  'al:android:url'?: string;
  'al:android:package'?: string;
  'al:android:app_name'?: string;
  'mobile-web-app-capable'?: string;
  'theme-color'?: string;
  viewport?: string;
  category?: string;
  author?: string;
  'og:image:width'?: string;
  'og:image:height'?: string;
  'fb:admins'?: string;
  'twitter:app:name:ipad'?: string;
  'twitter:app:id:ipad'?: string;
  'twitter:url'?: string;
  'twitter:image'?: string;
  'twitter:card'?: string;
  y_key?: string;
  section?: string;
  news_keywords?: string;
  'last-modified'?: string;
  position?: string;
  'google-play-app'?: string;
  'og:locale'?: string;
  'article:publisher'?: string;
  'twitter:image:src'?: string;
  'twitter:creator'?: string;
  'twitter:site:id'?: string;
  'dcterms.title'?: string;
  'dcterms.description'?: string;
  'dcterms.type'?: string;
  'dcterms.format'?: string;
  'dcterms.language'?: string;
  'dcterms.identifier'?: string;
  'dcterms.created'?: string;
  'dcterms.available'?: string;
  'dcterms.publisher'?: string;
  'dcterms.creator'?: string;
  'dcterms.subject'?: string;
  'article:tag'?: string;
}

export interface Csethumbnail {
  width: string;
  height: string;
  src: string;
}

export interface SearchInformation {
  searchTime: number;
  formattedSearchTime: string;
  totalResults: string;
  formattedTotalResults: string;
}

export interface Context {
  title: string;
}

export interface Queries {
  request: Request[];
  nextPage: Request[];
}

export interface Request {
  title: string;
  totalResults: string;
  searchTerms: string;
  count: number;
  startIndex: number;
  inputEncoding: string;
  outputEncoding: string;
  safe: string;
  cx: string;
}

export interface Url {
  type: string;
  template: string;
}