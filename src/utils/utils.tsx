export function formatPkmName(name: string): string {
    if (name.includes("♀")) {
        return name.replace("♀", "-f")
    }
    if (name.includes("♂")) {
        return name.replace("♂", "-m")
    }
    if (name.includes(". ")) {
        return name.replace(". ", "-")
    }
    if (name.includes("farfetch'd")) {
        return name.replace("farfetch'd", "farfetchd")
    }
    return name
}

export function capitalizarPrimeraLetra(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}