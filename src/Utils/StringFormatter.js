const StringFormatter = {
    capitalize: (string) => {
        return string.replace(/^\w/, c => c.toUpperCase())
    }
}
export default StringFormatter;