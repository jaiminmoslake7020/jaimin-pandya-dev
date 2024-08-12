module.exports = {
    eslint: {
        enable: true /* (default value) */,
        mode: 'extends' /* (default value) */ || 'file',
    },
    typescript: {
        enableTypeChecking: true /* (default value) */,
    },
    jest: {
        babel: {
            addPresets: true /* (default value) */,
            addPlugins: true /* (default value) */,
        },
    },
    style: {
        postOptions: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
};
