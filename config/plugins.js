module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('LIARA_ACCESS_KEY_ID'),
        secretAccessKey: env('LIARA_ACCESS_SECRET'),
        endpoint: env('LIARA_ENDPOINT'),
        params: {
          Bucket: env('LIARA_BUCKET'),
        },
      },
    },
  },
  // ...
});