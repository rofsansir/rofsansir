/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/js/**/*.tsx',
        './resources/js/**/*.ts',
        './resources/js/**/*.jsx',
        './resources/js/**/*.js',
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    navy: '#344871',
                    'blue-light': '#1877F2',
                    blue: '#006DD6',
                    'blue-medium': '#0080FF',
                    'blue-dark': '#0054A5',
                    white: '#FFF',
                    dark: '#1e293b',
                },
            },
            fontFamily: {
                heading: ['Poppins', 'Montserrat', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
                float: 'float 3s ease-in-out infinite',
                'fade-in': 'fadeIn 0.3s ease-in',
            },
            keyframes: {
                fadeInUp: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(20px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
        },
    },
    plugins: [],
};
