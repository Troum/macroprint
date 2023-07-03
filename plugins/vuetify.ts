import {createVuetify} from 'vuetify';
import 'vuetify/styles';

const macroprintTheme = {
    dark: false,
    colors: {
        background: '#FFFFFF',
        surface: '#FFFFFF',
        primary: '#001A31',
        secondary: '#D24829',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    }
}
export default defineNuxtPlugin((nuxtApp) => {

    const vuetify = createVuetify({
        ssr: true,
        theme: {
            defaultTheme: 'macroprintTheme',
            themes: {
                macroprintTheme,
            },
        }
    });

    nuxtApp.vueApp.use(vuetify);

    if (!process.server) console.log('❤️ Initialized Vuetify 3', vuetify);
});
