import React from "react";
import ApiHeaders from "../../components/ApiHeaders";
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((elem) => {
    return {
      params: {
        pageno: elem.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.pageno;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
const pageno = ({ data }) => {
  return (
    <ApiHeaders>
      <div
        key={data.id}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h3>{data.username}</h3>
        <p> {data.email} </p>
        <p> {data.phone} </p>
        <p> {data.website} </p>
      </div>
    </ApiHeaders>
  );
};

export default pageno;
