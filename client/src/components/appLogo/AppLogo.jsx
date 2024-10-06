import React from 'react';

const AppLogo = (props) => {
    return (
        <svg
            width={102}
            height={32}
            style={{
                display: "block",
                color: "red"
            }}
            {...props}
        >
            <path
                fill="currentcolor"
                d="M29.386 22.71a16.927 16.927 0 0 0-.47-1.154c-.246-.555-.503-1.111-.752-1.65l-.02-.042a369.129 369.129 0 0 0-7.078-14.477l-.105-.204c-.253-.49-.514-.997-.783-1.495a9.714 9.714 0 0 0-1.15-1.771A5.358 5.358 0 0 0 14.917 0a5.368 5.368 0 0 0-4.111 1.918 9.756 9.756 0 0 0-1.15 1.77c-.27.503-.535 1.015-.79 1.51l-.097.189A369.464 369.464 0 0 0 1.69 19.864l-.032.07c-.245.529-.497 1.076-.739 1.622-.16.361-.327.75-.47 1.154a7.074 7.074 0 0 0-.382 3.448 6.812 6.812 0 0 0 4.18 5.335 6.945 6.945 0 0 0 2.62.507c.281 0 .563-.017.843-.05a8.613 8.613 0 0 0 3.222-1.086c1.3-.73 2.583-1.8 3.985-3.33 1.402 1.53 2.686 2.6 3.986 3.33.99.573 2.086.942 3.221 1.087.28.032.562.049.845.049a6.944 6.944 0 0 0 2.62-.507 6.812 6.812 0 0 0 4.18-5.335 7.08 7.08 0 0 0-.383-3.448Zm-14.469 1.667c-1.735-2.2-2.85-4.243-3.24-5.956a5.267 5.267 0 0 1-.111-1.964c.068-.48.244-.94.516-1.342a3.576 3.576 0 0 1 2.835-1.393 3.584 3.584 0 0 1 2.836 1.393c.271.403.448.862.516 1.343a5.269 5.269 0 0 1-.112 1.964c-.39 1.713-1.504 3.755-3.24 5.955Zm12.824 1.492a4.764 4.764 0 0 1-2.923 3.73 4.99 4.99 0 0 1-2.457.322 6.492 6.492 0 0 1-2.454-.839c-1.157-.65-2.328-1.647-3.646-3.11 2.098-2.587 3.408-4.972 3.893-7.095.218-.893.266-1.82.14-2.73a5.234 5.234 0 0 0-.852-2.188 5.62 5.62 0 0 0-4.524-2.281 5.63 5.63 0 0 0-4.525 2.28 5.234 5.234 0 0 0-.852 2.188c-.126.91-.079 1.836.14 2.729.484 2.124 1.794 4.509 3.892 7.096-1.318 1.464-2.489 2.462-3.645 3.111a6.491 6.491 0 0 1-2.454.838 4.991 4.991 0 0 1-2.458-.321 4.776 4.776 0 0 1-2.922-3.73 5.017 5.017 0 0 1 .284-2.474c.115-.322.249-.638.415-1.013.234-.531.484-1.07.725-1.592l.032-.07a367.445 367.445 0 0 1 7.04-14.397l.098-.19c.25-.487.51-.99.772-1.477.25-.501.553-.974.904-1.412a3.311 3.311 0 0 1 3.964-.885c.441.208.831.51 1.142.885.351.437.654.91.904 1.411.26.482.517.981.766 1.464l.105.204a367 367 0 0 1 7.04 14.397l.02.043c.245.53.498 1.079.737 1.619.166.376.3.692.415 1.012a5.02 5.02 0 0 1 .284 2.475ZM41.685 24.12c-.8 0-1.535-.16-2.206-.48a5.49 5.49 0 0 1-1.758-1.346c-.511-.577-.895-1.25-1.182-1.986-.288-.769-.416-1.602-.416-2.499s.16-1.762.448-2.53a6.955 6.955 0 0 1 1.214-2.05 5.492 5.492 0 0 1 1.822-1.378 5.34 5.34 0 0 1 2.27-.48c.799 0 1.502.16 2.141.512.64.32 1.15.801 1.566 1.41l.096-1.57h2.94V23.8h-2.94l-.096-1.761a4.528 4.528 0 0 1-1.662 1.537c-.64.352-1.406.545-2.237.545Zm.767-2.883c.575 0 1.087-.16 1.566-.449.448-.32.8-.736 1.087-1.249.256-.513.383-1.121.383-1.794 0-.672-.127-1.281-.383-1.794a3.425 3.425 0 0 0-1.087-1.249c-.447-.32-.99-.448-1.566-.448-.575 0-1.087.16-1.566.448-.448.32-.8.737-1.087 1.25-.256.512-.384 1.12-.384 1.793 0 .673.128 1.281.384 1.794.256.512.64.929 1.087 1.25.48.287.99.448 1.566.448ZM53.639 8.456c0 .352-.064.673-.224.929s-.383.48-.67.64c-.288.16-.608.225-.928.225-.32 0-.639-.064-.927-.225a1.847 1.847 0 0 1-.67-.64 1.817 1.817 0 0 1-.225-.93c0-.351.064-.672.224-.928.16-.288.384-.48.671-.64.288-.16.608-.225.927-.225.32 0 .64.064.927.224.288.16.512.385.671.641.128.256.224.545.224.929Zm-3.42 15.311V11.691h3.196v12.076H50.22Zm11.73-8.905v.032c-.159-.064-.35-.096-.51-.128-.192-.032-.352-.032-.544-.032-.895 0-1.566.256-2.014.801-.48.544-.703 1.313-.703 2.306v5.926h-3.196V11.691h2.94l.096 1.826c.32-.64.703-1.121 1.247-1.473.511-.353 1.118-.513 1.822-.513.223 0 .447.032.639.064.096.032.16.032.224.064v3.203Zm1.28 8.905V6.727h3.196v6.502a5.083 5.083 0 0 1 1.598-1.378 4.697 4.697 0 0 1 2.142-.512c.798 0 1.534.16 2.205.48a5.49 5.49 0 0 1 1.758 1.346c.511.576.895 1.249 1.183 1.986.287.768.415 1.601.415 2.498 0 .897-.16 1.762-.447 2.53a6.954 6.954 0 0 1-1.215 2.05 5.493 5.493 0 0 1-1.822 1.378 5.34 5.34 0 0 1-2.27.48c-.798 0-1.502-.16-2.14-.512-.64-.32-1.152-.8-1.567-1.41l-.096 1.57-2.94.032Zm6.168-2.53c.576 0 1.087-.16 1.566-.449.448-.32.8-.736 1.087-1.249.256-.513.384-1.121.384-1.794 0-.672-.128-1.281-.384-1.794-.287-.512-.639-.928-1.087-1.249-.447-.32-.99-.448-1.566-.448-.575 0-1.086.16-1.566.448-.447.32-.799.737-1.087 1.25-.255.512-.383 1.12-.383 1.793 0 .673.128 1.281.383 1.794.256.512.64.929 1.087 1.25.48.287.991.448 1.566.448Zm7.544 2.53V11.691h2.94l.096 1.57c.352-.577.831-1.025 1.439-1.378.607-.352 1.31-.512 2.11-.512.894 0 1.661.224 2.3.64.672.417 1.183 1.026 1.535 1.794.352.769.543 1.698.543 2.755v7.24h-3.196v-6.824c0-.832-.192-1.505-.575-1.986-.384-.48-.895-.736-1.567-.736-.48 0-.895.096-1.278.32-.352.224-.64.512-.863.929-.224.384-.32.865-.32 1.345v6.92h-3.164Zm12.561 0V6.727H92.7v6.502a5.083 5.083 0 0 1 1.598-1.378 4.697 4.697 0 0 1 2.142-.512c.799 0 1.534.16 2.205.48.671.32 1.247.769 1.758 1.346.512.576.895 1.249 1.183 1.986.288.768.415 1.601.415 2.498a7.25 7.25 0 0 1-.447 2.53 6.95 6.95 0 0 1-1.215 2.05 5.49 5.49 0 0 1-1.822 1.378 5.34 5.34 0 0 1-2.27.48c-.798 0-1.501-.16-2.14-.512-.64-.32-1.151-.8-1.567-1.41l-.096 1.57-2.94.032Zm6.202-2.53c.575 0 1.086-.16 1.566-.449.447-.32.799-.736 1.087-1.249.255-.513.383-1.121.383-1.794 0-.672-.128-1.281-.383-1.794a3.425 3.425 0 0 0-1.087-1.249c-.448-.32-.991-.448-1.566-.448-.576 0-1.087.16-1.567.448-.447.32-.799.737-1.087 1.25-.287.512-.383 1.12-.383 1.793 0 .673.128 1.281.383 1.794.256.512.64.929 1.087 1.25.48.287.96.448 1.567.448Z"
            />
        </svg>
    );
};

export default AppLogo;
