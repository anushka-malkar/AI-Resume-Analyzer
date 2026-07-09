export default function Loader() {

  return (

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px"
      }}
    >

      <div
        style={{
          width: "60px",
          height: "60px",
          border: "6px solid #ddd",
          borderTop: "6px solid #2563eb",
          borderRadius: "50%",
          animation: "spin 1s linear infinite"
        }}
      ></div>

      <style>
        {`
        @keyframes spin{
          from{
            transform:rotate(0deg);
          }

          to{
            transform:rotate(360deg);
          }
        }
        `}
      </style>

    </div>

  );

}