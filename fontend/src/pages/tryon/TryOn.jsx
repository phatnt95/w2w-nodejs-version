import React from "react";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Avatar = () => {
    const { scene } = useGLTF("/models/avatar.glb"); // đặt sẵn model avatar.glb trong public/models
    return <primitive object={scene} scale={1.5} />;
}

const Outfit = ({ modelUrl }) => {
    if (!modelUrl) return null;
    const { scene } = useGLTF(modelUrl);
    return <primitive object={scene} scale={1.5} />;
}

const TryOn = () => {
    const [outfit, setOutfit] = useState(null);

    // Hardcode sản phẩm demo
    const products = [
        { id: 1, name: "Áo thun trắng", modelUrl: "/models/shirt-white.glb" },
        { id: 2, name: "Quần jeans xanh", modelUrl: "/models/jeans-blue.glb" },
        // { id: 3, name: "Áo khoác đen", modelUrl: "/models/jacket-black.glb" },
    ];

    return (
        <div style={{ flex: 1, background: "#f5f5f5" }}>
            <Canvas camera={{ position: [0, 1.5, 3] }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[2, 5, 2]} intensity={1} />
                <Avatar />
                <Outfit modelUrl={outfit?.modelUrl} />
                <OrbitControls />
            </Canvas>
        </div>
        // <div style={{ display: "flex", height: "100vh" }}>

        //     <div style={{ flex: 1, background: "#f5f5f5" }}>
        //         <Canvas camera={{ position: [0, 1.5, 3] }}>
        //             <ambientLight intensity={0.6} />
        //             <directionalLight position={[2, 5, 2]} intensity={1} />
        //             <Avatar />
        //             <Outfit modelUrl={outfit?.modelUrl} />
        //             <OrbitControls />
        //         </Canvas>
        //     </div>


        //     <div style={{ width: "250px", padding: 20, background: "#fff" }}>
        //         <h3>Chọn trang phục</h3>
        //         {products.map((p) => (
        //             <div key={p.id} style={{ marginBottom: 10 }}>
        //                 <button
        //                     style={{
        //                         width: "100%",
        //                         padding: "10px",
        //                         cursor: "pointer",
        //                         background: outfit?.id === p.id ? "#1976d2" : "#eee",
        //                         color: outfit?.id === p.id ? "#fff" : "#000",
        //                         border: "none",
        //                         borderRadius: "4px",
        //                     }}
        //                     onClick={() => setOutfit(p)}
        //                 >
        //                     {p.name}
        //                 </button>
        //             </div>
        //         ))}
        //         <button
        //             style={{
        //                 width: "100%",
        //                 padding: "10px",
        //                 marginTop: "20px",
        //                 background: "#f44336",
        //                 color: "#fff",
        //                 border: "none",
        //                 borderRadius: "4px",
        //                 cursor: "pointer",
        //             }}
        //             onClick={() => setOutfit(null)}
        //         >
        //             Reset outfit
        //         </button>
        //     </div>
        // </div>
    );
}

export default TryOn;