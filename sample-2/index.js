const KEY_STORAGE_DATA = 'storage:data'

const getStorageData = () => {
    const data = localStorage.getItem(KEY_STORAGE_DATA)

    return data ? JSON.parse(data) : []
}

const setStorageData = (response: { isin: string, data: Object }[]) => {
    const updatedData = [
        ...getStorageData(),
        ...response,
    ]

    localStorage.setItem(KEY_STORAGE_DATA, JSON.stringify(updatedData))
}

const getNoCachedIsins = (isins: string[]) => {
    const cachedIsins = getStorageData().map(element => element.isin)

    return isins.filter(isin => cachedIsins.indexOf(isin) !== -1)
}

const getBondsData = async ({ date, isins }: { date: string, isins: string[] }) => {
    // Получаю массив не закешированных isins
    const noCachedIsins = getNoCachedIsins(isins)

    // Если не закешированных isins нет, то возвращаю данные из storageData
    if (noCachedIsins.length === 0) {
        return getStorageData()
    }

    // Иначе, делаю запрос на получение isins, которых нет в кеше
    await http.post({
        url: `/bonds/${date}`,
        body: noCachedIsins,
    })
        // Полученные данных ложу в storage
        .then(response => setStorageData(response))

    // И, возвращаю итоговый storage
    return getStorageData()
}

getBondsData({
    date: '20180120',
    isins: ['XS0971721963', 'RU000A0JU4L3'],
})
