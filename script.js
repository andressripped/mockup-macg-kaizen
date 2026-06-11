// Tailwind configuration extracted from index.html
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "on-error": "#ffffff",
                "surface-container-lowest": "#ffffff",
                "primary-fixed": "#dae2ff",
                "tertiary": "#000000",
                "tertiary-container": "#131c2b",
                "on-error-container": "#93000a",
                "surface-container-low": "#f2f4f7",
                "text-muted": "#64748B",
                "on-primary-fixed-variant": "#3e465d",
                "outline": "#76777d",
                "inverse-on-surface": "#eff1f4",
                "surface-dim": "#d8dadd",
                "surface-container-high": "#e6e8eb",
                "secondary-container": "#b7f568",
                "surface-tint": "#565e76",
                "on-surface": "#191c1e",
                "inverse-surface": "#2d3133",
                "primary-fixed-dim": "#bec6e2",
                "outline-variant": "#c6c6cd",
                "surface-variant": "#e0e3e6",
                "background": "#f7f9fc",
                "inverse-primary": "#bec6e2",
                "error-container": "#ffdad6",
                "on-primary-fixed": "#131b30",
                "surface": "#f7f9fc",
                "surface-container-highest": "#e0e3e6",
                "on-secondary-fixed": "#102000",
                "on-surface-variant": "#45464d",
                "secondary-fixed": "#b7f568",
                "primary-container": "#131b30",
                "primary": "#000000",
                "on-secondary-container": "#457000",
                "error": "#ba1a1a",
                "tertiary-fixed": "#dbe2f8",
                "on-secondary-fixed-variant": "#304f00",
                "on-primary-container": "#7c839d",
                "secondary": "#416900",
                "on-secondary": "#ffffff",
                "on-background": "#191c1e",
                "on-tertiary-container": "#7c8497",
                "on-tertiary-fixed": "#131c2b",
                "tertiary-fixed-dim": "#bec6dc",
                "white-pure": "#FFFFFF",
                "surface-container": "#eceef1",
                "on-tertiary": "#ffffff",
                "border-gray": "#CBD5E1",
                "secondary-fixed-dim": "#9cd84f",
                "surface-bright": "#f7f9fc",
                "on-primary": "#ffffff",
                "navy-deep": "#10182D",
                "lime-kaizen": "#8CC63F",
                "gray-corporate": "#F1F5F9"
            },
            "borderRadius": {
                "DEFAULT": "0px",
                "lg": "0px",
                "xl": "0px",
                "full": "9999px"
            },
            "spacing": {
                "card-padding": "3rem",
                "split-secondary": "40%",
                "gutter-grid": "2.5rem",
                "split-primary": "60%",
                "margin-mobile": "1.25rem",
                "section-padding": "8rem"
            },
            "fontFamily": {
                "headline-xl": ["Montserrat"],
                "headline-md": ["Montserrat"],
                "label-sm": ["Inter"],
                "body-lg": ["Inter"],
                "headline-xl-mobile": ["Montserrat"],
                "headline-lg": ["Montserrat"]
            },
            "fontSize": {
                "headline-xl": [
                    "3.5rem",
                    {
                        "lineHeight": "1.15",
                        "letterSpacing": "-0.02em",
                        "fontWeight": "800"
                    }
                ],
                "headline-md": [
                    "1.5rem",
                    {
                        "lineHeight": "1.3",
                        "fontWeight": "600"
                    }
                ],
                "label-sm": [
                    "0.75rem",
                    {
                        "lineHeight": "1.4",
                        "letterSpacing": "0.05em",
                        "fontWeight": "500"
                    }
                ],
                "body-lg": [
                    "1rem",
                    {
                        "lineHeight": "1.65",
                        "fontWeight": "400"
                    }
                ],
                "headline-xl-mobile": [
                    "2.25rem",
                    {
                        "lineHeight": "1.2",
                        "fontWeight": "800"
                    }
                ],
                "headline-lg": [
                    "2.25rem",
                    {
                        "lineHeight": "1.25",
                        "fontWeight": "700"
                    }
                ]
            }
        },
    },
};

// Interactive mobile menu logic
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("mobile-menu-btn");
    const mobileDropdown = document.getElementById("mobile-dropdown");

    if (menuBtn && mobileDropdown) {
        menuBtn.addEventListener("click", () => {
            mobileDropdown.classList.toggle("hidden");
            mobileDropdown.classList.toggle("flex");
        });
    }
});
