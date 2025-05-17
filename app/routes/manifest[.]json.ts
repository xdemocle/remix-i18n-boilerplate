export async function loader() {
  return Response.json({
    short_name: 'remix-i18n-boilerplate',
    name: 'remix-i18n-boilerplate - Launch your online store in 2 clicks',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '64x64 32x32 24x24 16x16',
        type: 'image/x-icon',
      },
    ],
  });
}
