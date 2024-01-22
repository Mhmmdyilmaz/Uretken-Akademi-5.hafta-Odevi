function Hobilerim() {
    const hobilerim=["Yazılım Dilleri","Bilgisayar Oyunları","Balık Tutmak","Doğa Gezileri","Motosiklet Kullanmak"]

    const mapHobiler=hobilerim.map((hobi,i)=><li key={i}>{hobi}</li>)
    return(
        <>
        {mapHobiler}
        </>
    )
}
export default Hobilerim