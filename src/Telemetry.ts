export const sendEvent = (category: string, action: string, label: string, value: string) => {
    if (window.gtag) {
        const ga = window.gtag as any
        gtag("event", action, {
            "event_category": category,
            "event_label": label,
            "event_value": value,
        })
    }
}
