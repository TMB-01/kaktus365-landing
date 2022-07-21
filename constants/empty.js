export const empty = {
    NO_NEED:"NO_NEED",
    NOT_PROVIDED:"NOT_PROVIDED",
    FREE:"FREE",
    isNotEmpty: (text) => {
        return text !== empty.NO_NEED && text !== empty.NOT_PROVIDED && text !== empty.FREE
    }
}
