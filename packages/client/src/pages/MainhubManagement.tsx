import { useMainhubsQuery } from "generated/graphql";

function MainhubManagement() {
  const { data } = useMainhubsQuery();

  return (
    <>
      {data?.mainhubs.map((mainhub) => (
        <ul key={mainhub.id}>
          <li>{mainhub.name}</li>
        </ul>
      ))}
    </>
  );
}

export default MainhubManagement;
