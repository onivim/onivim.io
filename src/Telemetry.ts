export const sendEvent = (category: string, action: string, label: string) => {
    if (window.ga) {
        const ga = window.ga as any
        ga("send", "event", category, action, label)
    }
}
