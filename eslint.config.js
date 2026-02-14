import { configs, defineConfig, files } from '@sumup-oss/foundry/eslint';

export default defineConfig([
  configs.ignores,
  {
    extends: [configs.typescript],
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['.github/actions/check-links/*'],
        },
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  configs.browser,
  {
    files: [...files.javascript, files.typescript],
    extends: [configs.react],
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
]);
