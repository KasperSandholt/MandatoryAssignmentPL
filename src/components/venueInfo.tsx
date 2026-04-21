import { Container, Card, Badge, Spinner, Alert } from 'react-bootstrap';
import { useGetVenueQuery } from "../store/apis/footballApi";

export default function VenueInfo() {
  // 1. Her opretter vi forbindelsen til API'et
  const { data, error, isFetching } = useGetVenueQuery("16163");

  if (isFetching) return (
    <Container className="text-center mt-4">
      <Spinner animation="border" variant="primary" />
    </Container>
  );

  if (error) return (
    <Container className="mt-4">
      <Alert variant="danger" className="text-center">
        Fejl ved indlæsning af stadioninformation. Viser gemt data.
      </Alert>
    </Container>
  );

  // 2. Hvis API'et fejler eller er tomt, bruger vi vores "Nød-data" (Fallback)
  // På den måde er der ALTID forbindelse, men siden er aldrig tom.
  const fallbackVenue = {
    strVenue: "Wembley Stadium (Fallback)",
    strLocation: "London, England",
    intCapacity: "90000",
    strDescriptionEN: "Data hentes normalt live, men her vises gemt information om Wembley.",
    // Et billede af Wembley Stadium, som vi har gemt lokalt eller fundet online
    strThumb: "https://r2.thesportsdb.com/images/media/venue/thumb/qttuty1420627847.jpg",
    strWebsite: "www.wembleystadium.com"
  };

  // Vi tjekker om vi har fået data fra API'et, ellers bruger vi fallback
  const venue = data?.venues?.[0] || fallbackVenue;

  return (
    <Container className="mt-4">
      <Card className="shadow-sm border-0 overflow-hidden">
        {/* Billedet kommer fra API forbindelsen */}
        <Card.Img variant="top" src={venue.strThumb} alt={venue.strVenue} />
        
        <Card.Body className="p-4">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div>
              <h2 className="fw-bold mb-0">{venue.strVenue}</h2>
              <p className="text-muted">{venue.strLocation}</p>
            </div>
            <Badge bg="success" className="p-2">
              Kapacitet: {Number(venue.intCapacity).toLocaleString()}
            </Badge>
          </div>
          
          <Card.Text style={{ lineHeight: '1.6' }}>
            {venue.strDescriptionEN.split('\r\n')[0]}
          </Card.Text>
          
          <hr />
          
          <div className="d-flex justify-content-between align-items-center">
            <a href={`https://${venue.strWebsite}`} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
              Besøg hjemmeside
            </a>
            <small className="text-muted">
              Kilde: {data?.venues ? "Live API" : "Lokal Cache"}
            </small>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}