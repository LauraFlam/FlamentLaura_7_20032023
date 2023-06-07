import './Logements.scss'

import { useParams, Navigate } from "react-router-dom";
import data from '../../Data/Data.js'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Tag from "../../components/Tag/Tag";
import Collapse from '../../components/Collapse/Collapse'
import Carrousel from '../../components/Carrousel/Carrousel'
import Rating from "../../components/Rating/Rating";
import Host from "../../components/Host/Host";

const LogementCard = () => {
  const { id } = useParams();

  const ficheLogement = data.find((logement) => logement.id === id);

  const tagsLogement = ficheLogement?.tags.map((tags, i) => {
    return <Tag key={i} nom={tags} />;
  });

  const equipements = ficheLogement?.equipments.map((equipment, i) => {
    return (
      <ul key={i}>
        <li>{equipment}</li>
      </ul>
    );
  });

  return (
    <>
      <Header />
      {ficheLogement ? (
        <div className="Fiche-container">
          <Carrousel slides={ficheLogement?.pictures} />
          <section className="Fiche-logement">
            <div className="logements-description">
              <div className="logements-description__content">
                <div className="logements-description__content__titles">
                  <span className="title">{ficheLogement?.title}</span>
                  <span className="location">
                    {ficheLogement?.location}
                  </span>
                </div>

                <div className="logements-description__content__tags">
                  {tagsLogement}
                </div>
              </div>

              <div className="logements-description__host">

                <div className="logements-description__host__infos">
                  <Host name={ficheLogement?.host.name} picture={ficheLogement?.host.picture} />
                </div>

                <div className="logements-description__host__rate">
                  <Rating score={ficheLogement.rating} />
                </div>
              </div>
            </div>
          </section>

          <div className="logements_collapse">
            <div className="logements_collapse_item">
              <Collapse title="Description" content={ficheLogement?.description} />
            </div>
            <div className="logements_collapse_item">
              <Collapse title="Équipements" content={equipements} />
            </div>
          </div>
        </div>
      ) : (
        <Navigate replace to="/404" />
      )}
      <Footer />
    </>
  );
};

export default LogementCard;
