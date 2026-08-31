const LANGUAGE_OPTIONS = [
    { name: 'English', code: 'GB' },
    { name: 'Spanish', code: 'ES' },
    { name: 'French', code: 'FR' },
    { name: 'Greek', code: 'GR' },
    { name: 'German', code: 'DE' },
    { name: 'Dutch', code: 'NL' },
    { name: 'Italian', code: 'IT' },
    { name: 'Russian', code: 'RU' },
    { name: 'Portuguese', code: 'PT' },
    { name: 'Polish', code: 'PL' },
];
export const getLanguageOptions = () => [...LANGUAGE_OPTIONS].sort((a, b) => a.name.localeCompare(b.name));

export default LANGUAGE_OPTIONS;