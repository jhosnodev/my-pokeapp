import { Normal, Fire, Fighting, Water, Flying, Grass, Poison, Electric, Ground, Psychic, Rock, Ice, Bug, Dragon, Ghost, Dark, Steel, Fairy, Stellar } from '../assets/images/PkmTypes'
export interface ColourOption {
    readonly id: string;
    readonly value: string;
    readonly color: string;
    readonly icon: string;
}

export const pkmTypes: readonly ColourOption[] =
    [
        { id: "normal", value: "Normal", color: "#a8a878", icon: Normal },
        { id: "fire", value: "Fire", color: "#f08030", icon: Fire },
        { id: "fighting", value: "Fighting", color: "#c03028", icon: Fighting },
        { id: "water", value: "Water", color: "#6890f0", icon: Water },
        { id: "flying", value: "Flying", color: "#a890f0", icon: Flying },
        { id: "grass", value: "Grass", color: "#78c850", icon: Grass },
        { id: "poison", value: "Poison", color: "#a040a0", icon: Poison },
        { id: "electric", value: "Electric", color: "#f8d030", icon: Electric },
        { id: "ground", value: "Ground", color: "#e0c068", icon: Ground },
        { id: "psychic", value: "Psychic", color: "#f85888", icon: Psychic },
        { id: "rock", value: "Rock", color: "#b8a038", icon: Rock },
        { id: "ice", value: "Ice", color: "#9bd9d9", icon: Ice },
        { id: "bug", value: "Bug", color: "#a8b820", icon: Bug },
        { id: "dragon", value: "Dragon", color: "#7038f8", icon: Dragon },
        { id: "ghost", value: "Ghost", color: "#705898", icon: Ghost },
        { id: "dark", value: "Dark", color: "#705848", icon: Dark },
        { id: "steel", value: "Steel", color: "#b8b8d0", icon: Steel },
        { id: "fairy", value: "Fairy", color: "#ee99ac", icon: Fairy },
        { id: "stellar", value: "Stellar", color: "#7cc7b2", icon: Stellar },
    ]
    ;