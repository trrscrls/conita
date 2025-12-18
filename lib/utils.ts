// Helper to get the base path for assets
export const basePath = process.env.NODE_ENV === 'production' ? '/conita' : '';

export function getAssetPath(path: string): string {
    return `${basePath}${path}`;
}
