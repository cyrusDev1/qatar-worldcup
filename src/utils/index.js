export function datetimeformat(MatchToday){
    MatchToday.forEach(element => {
        let datetime = element.datetime
        datetime = datetime.split('T')
        const date_ = datetime[0]
        const time = datetime[1]
        const h = time.split(':')[0]
        const m = time.split(':')[1]
        element.date = dateFrench(date_.split('-'))
        element.time = `${+h + 1}:${m}`;
    });
}

const dateFrench = date => {
    const day = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    const month = ['','Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    return `${date[2]} ${month[date[1]]} ${date[0]}`
}

