export const getPlantllist = async () => {
    const response = await fetch("http://127.0.0.1:8080/plant", { next: { revalidate: 3600 } })
    const plantList = await response.json()
    return plantList
}

export const weatherApi = async () => {
    const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=-6.8886&longitude=109.6753&hourly=temperature_2m,relative_humidity_2m,weather_code&timezone=Asia%2FBangkok&forecast_days=1",
        { next: { revalidate: 3600 } }
    )
    const result = await response.json()
    return result
}

export const weatherApiCode = async () => {
    const response = await fetch("https://gist.githubusercontent.com/stellasphere/9490c195ed2b53c707087c8c2db4ec0c/raw/76b0cb0ef0bfd8a2ec988aa54e30ecd1b483495d/descriptions.json",
        { next: { revalidate: 3600 } })
    const result = await response.json()
    return result
}

export const getPlantById = async (id: string) => {
    const response = await fetch(`http://127.0.0.1:8080/plant/${id}`, { next: { revalidate: 3600 } })
    const plantList = await response.json()
    return plantList
}

export const getDataTreatmentgraph = async (id: string) => {
    const response = await fetch(`http://127.0.0.1:8080/plant/${id}/treatment?graph=true`)
    const result = await response.json()
    return result
}

export const getDataTreatment = async (id: string, treatment: string) => {
    if (treatment == '') {
        const response = await fetch(`http://127.0.0.1:8080/plant/${id}/treatment`)
        const data = await response.json();
        return data;
    } else {
        const response = await fetch(`http://127.0.0.1:8080/plant/${id}/treatment?treatment=${treatment}`);
        const data = await response.json();
        return data;
    }
}

export const getDetailDataTreatment = async (id: string | null, id_treatment: string | null) => {
    try {
        const response = await fetch(`http://127.0.0.1:8080/plant/${id}/treatment/${id_treatment}`)
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const getAllTreatmentNotDone = async () => {
    try {
        const response = await fetch("http://127.0.0.1:8080/treatment", { next: { revalidate: 3600 } })
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error)
    }
}