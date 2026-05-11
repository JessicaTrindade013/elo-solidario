import S from './infoCard.module.scss';

export default function InfoCard(props) {
    return (
        <article className={S.article}>
            <div className={S.cardImage}>
                <img src={props.img} alt={props.alt} />
            </div>
            
            <div className={S.cardContent}>
                <h2>{props.subtitulo}</h2>
                <p>{props.paragrafo}</p>
                <button
                className={
                    props.status === "importante"
                    ? `${S.btnImportante}`
                    : `${S.btnUrgente}`
                }
                >
                {props.textBotao}
                </button>
            </div>
        </article>
    );
}