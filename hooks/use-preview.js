import { useRouter } from 'next/router';

export default function usePreview() {
  const { query = {} } = useRouter();
  return !!query.preview;
}
