# CEF Vehicle Panel для RAGE:MP

Frontend для CEF-интерфейса на RAGE:MP, реализованный на **Next.js**, **TypeScript**, **Zustand** и **SCSS** с архитектурой FSD.  

Позволяет игроку управлять автомобилем через интерфейс: двери, окна, фары, двигатель, ремни, мультимедиа и режимы вождения.

## Стек
- **Next.js 15** — SPA для CEF
- **React 19 + TypeScript**
- **Zustand** — глобальный store с под-срезами
- **SCSS Modules** — стили по компонентам
- **FSD (Feature-Sliced Design)** — структура проекта
- **RAGE:MP CEF Types** — типизация `mp` и событий
- **SVG Icons** — отдельные React-компоненты для иконок

## Установка

```bash
git clone [<repo-url>](https://github.com/Letrider/ragemp_car_settings_interface.git)
cd cef-yourproject
npm install
