import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

import styles from './SolarSystem.module.css';

const PLANET_DATA = {
    sun: { name: '太陽', type: '恒星', size: '地球の約109倍', distance: '中心', feature: '太陽系の中心に位置する恒星。', color: 0xFFA500, radius: 60, orbitalRadius: 0, orbitalPeriod: 0 },
    mercury: { name: '水星', type: '岩石惑星', size: '地球の約0.38倍', distance: '約5,800万km', orbitalPeriod: '約88日', feature: '太陽に最も近く、昼夜の温度差が激しい。', color: 0xAAAAAA, radius: 3, orbitalRadius: 100, orbitalSpeed: 0.005 },
    venus: { name: '金星', type: '岩石惑星', size: '地球の約0.95倍', distance: '約1億800万km', orbitalPeriod: '約225日', feature: '厚い二酸化炭素の大気で覆われ、非常に高温。', color: 0xEECC99, radius: 7, orbitalRadius: 160, orbitalSpeed: 0.0035 },
    earth: { name: '地球', type: '岩石惑星', size: '基準', distance: '約1億5000万km', orbitalPeriod: '約365日', feature: '生命が存在する唯一の惑星。', color: 0x0077FF, radius: 8, orbitalRadius: 230, orbitalSpeed: 0.003, hasMoon: true },
    moon: { name: '月', type: '衛星', size: '地球の約0.27倍', distance: '約38万km (地球から)', orbitalPeriod: '約27日', feature: '地球唯一の天然衛星。', color: 0xCCCCCC, radius: 2.4, orbitalRadius: 0, orbitalSpeed: 0, isMoonData: true },
    mars: { name: '火星', type: '岩石惑星', size: '地球の約0.53倍', distance: '約2億2800万km', orbitalPeriod: '約687日', feature: '「赤い惑星」として知られ、水や生命の痕跡が探されている。', color: 0xFF4400, radius: 5, orbitalRadius: 300, orbitalSpeed: 0.0025 },
    jupiter: { name: '木星', type: 'ガス惑星', size: '地球の約11倍', distance: '約7億7800万km', orbitalPeriod: '約12年', feature: '太陽系最大の惑星。大赤斑が特徴。', color: 0xDDAA88, radius: 30, orbitalRadius: 500, orbitalSpeed: 0.001 },
    saturn: { name: '土星', type: 'ガス惑星', size: '地球の約9.5倍', distance: '約14億3000万km', orbitalPeriod: '約29年', feature: '美しい環を持つことで知られる。', color: 0xD8BF80, radius: 25, orbitalRadius: 750, orbitalSpeed: 0.0007, hasRing: true, tilt: 0.3 },
    uranus: { name: '天王星', type: '巨大氷惑星', size: '地球の約4倍', distance: '約28億7000万km', orbitalPeriod: '約84年', feature: '横倒しに自転している特異な惑星。', color: 0xADD8E6, radius: 20, orbitalRadius: 950, orbitalSpeed: 0.0004 },
    neptune: { name: '海王星', type: '巨大氷惑星', size: '地球の約3.9倍', distance: '約45億km', orbitalPeriod: '約165年', feature: '強い風と暗い大黒斑が特徴。', color: 0x000080, radius: 19, orbitalRadius: 1150, orbitalSpeed: 0.0003 }
};

export const SolarSystem = () => {
    const mountRef = useRef(null);
    const planetsRef = useRef([]); // { mesh, pivot, data } を格納
    const currentTargetPlanetRef = useRef(null); // Three.jsのMeshオブジェクトを格納
    const isZoomedInRef = useRef(false);
    const cameraRef = useRef(null); // Three.jsのカメラインスタンスを保持
    const rendererRef = useRef(null); // Rendererインスタンスを保持
    const currentCameraTween = useRef(null); // 現在のカメラTweenを保持 (GSAP用)

    const [infoPanelVisible, setInfoPanelVisible] = useState(false);
    const [infoPanelData, setInfoPanelData] = useState({});

    // 惑星情報パネルを表示する関数
    const displayPlanetInfo = useCallback((planetKey) => {
        const data = PLANET_DATA[planetKey];
        if (data) {
            setInfoPanelData({
                name: data.name,
                type: data.type,
                size: data.size,
                distance: data.distance,
                orbitalPeriod: data.orbitalPeriod || 'なし',
                feature: data.feature,
            });
            setInfoPanelVisible(true);
        } else {
            setInfoPanelVisible(false);
            setInfoPanelData({});
            console.warn("No data found for planet key:", planetKey);
        }
    }, []);

    // 惑星情報パネルを非表示にする関数
    const hidePlanetInfo = useCallback(() => {
        setInfoPanelVisible(false);
        setInfoPanelData({});
    }, []);

    // カメラを初期位置に戻す関数
    const resetCameraView = useCallback(() => {
        hidePlanetInfo();
        currentTargetPlanetRef.current = null;
        isZoomedInRef.current = false;

        const originalCameraPosition = new THREE.Vector3(0, 300, 1000);

        // 既存のカメラTweenがあれば停止
        if (currentCameraTween.current) {
            currentCameraTween.current.kill();
            currentCameraTween.current = null;
            // console.log("Existing camera tween killed before reset."); // デバッグログをコメントアウト
        }

        currentCameraTween.current = gsap.to(cameraRef.current.position, {
            duration: 1.5,
            x: originalCameraPosition.x,
            y: originalCameraPosition.y,
            z: originalCameraPosition.z,
            ease: "power2.out", // TWEEN.Easing.Quadratic.Out に近い
            onUpdate: () => {
                // console.log("RESET GSAP Tween updating. Current camera position: x=", cameraRef.current.position.x, "y=", cameraRef.current.position.y, "z=", cameraRef.current.position.z);
            },
            onComplete: () => {
                cameraRef.current.lookAt(0, 0, 0);
                // console.log("Camera reset complete."); // デバッグログをコメントアウト
                currentCameraTween.current = null; // Tween完了後に参照をクリア
            },
            onInterrupt: () => { // GSAPでのonStopに相当 (途中で別のTweenが開始された場合)
                // console.warn("RESET GSAP Tween animation INTERRUPTED prematurely!"); // デバッグログをコメントアウト
                currentCameraTween.current = null; // Tween停止後に参照をクリア
            }
        });
        // console.log("RESET GSAP Tween started."); // デバッグログをコメントアウト
    }, [hidePlanetInfo]);

    useEffect(() => {
        const currentMount = mountRef.current;
        if (!currentMount) {
            // console.log("mountRef.current is null. useEffect exiting."); // デバッグログをコメントアウト
            return;
        }

        // console.log("useEffect: Starting Three.js setup."); // デバッグログをコメントアウト

        // GSAPは明示的なremoveAllは通常不要だが、念のため既存のTweenを全てkill
        gsap.globalTimeline.clear();
        // console.log("GSAP global timeline cleared at useEffect setup."); // デバッグログをコメントアウト

        const scene = new THREE.Scene();
        scene.background = null;

        const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 10000);
        const originalCameraPosition = new THREE.Vector3(0, 300, 1000);
        camera.position.copy(originalCameraPosition);
        camera.lookAt(0, 0, 0);
        cameraRef.current = camera; // useRefにカメラを保持

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        rendererRef.current = renderer; // RendererもRefに保持

        // カラーマネジメント設定
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 2.0;
        renderer.physicallyCorrectLights = true;
        renderer.shadowMap.enabled = false;

        currentMount.appendChild(renderer.domElement);

        // 光源の追加
        const ambientLight = new THREE.AmbientLight(0x404040, 0.8);
        scene.add(ambientLight);

        const sunLight = new THREE.PointLight(0xFFFFFF, 2.0, 2000, 0.1);
        sunLight.position.set(0, 0, 0);
        scene.add(sunLight);

        // 太陽の作成
        const sunData = PLANET_DATA.sun;
        const sunGeometry = new THREE.SphereGeometry(sunData.radius, 32, 32);
        const sunMaterial = new THREE.MeshBasicMaterial({ color: sunData.color });
        const sun = new THREE.Mesh(sunGeometry, sunMaterial);
        sun.name = 'sun';
        scene.add(sun);
        planetsRef.current.push({ mesh: sun, pivot: null, data: sunData });

        // 各惑星の作成
        for (const key in PLANET_DATA) {
            if (key === 'sun' || PLANET_DATA[key].isMoonData) continue;

            const data = PLANET_DATA[key];
            const planetGeometry = new THREE.SphereGeometry(data.radius, 32, 32);
            const planetMaterial = new THREE.MeshStandardMaterial({
                color: data.color,
                roughness: 0.8,
                metalness: 0.0
            });
            const planet = new THREE.Mesh(planetGeometry, planetMaterial);
            planet.name = key;

            const orbitPivot = new THREE.Object3D();
            orbitPivot.add(planet);
            scene.add(orbitPivot);

            planet.position.set(data.orbitalRadius, 0, 0);

            // 軌道リングの作成
            const orbitGeometry = new THREE.RingGeometry(data.orbitalRadius - 0.5, data.orbitalRadius + 0.5, 128);
            const orbitMaterial = new THREE.MeshBasicMaterial({ color: 0x444444, side: THREE.DoubleSide });
            const orbitRing = new THREE.Mesh(orbitGeometry, orbitMaterial);
            orbitRing.rotation.x = Math.PI / 2;
            scene.add(orbitRing);

            planetsRef.current.push({ mesh: planet, pivot: orbitPivot, data: data });

            // 月の追加
            if (data.hasMoon) {
                const moonData = PLANET_DATA.moon;
                const moonSize = moonData.radius;
                const moonOrbitalRadius = planet.geometry.parameters.radius * 2;
                const moonGeometry = new THREE.SphereGeometry(moonSize, 16, 16);
                const moonMaterial = new THREE.MeshStandardMaterial({
                    color: moonData.color,
                    roughness: 0.8,
                    metalness: 0.0
                });
                const moon = new THREE.Mesh(moonGeometry, moonMaterial);
                moon.name = 'moon';

                const moonOrbitPivot = new THREE.Object3D();
                moonOrbitPivot.add(moon);
                planet.add(moonOrbitPivot);

                moon.position.set(moonOrbitalRadius, 0, 0);
                planetsRef.current.push({ mesh: moon, pivot: moonOrbitPivot, data: { ...moonData, orbitalSpeed: 0.05 } });
            }

            // 土星の環の追加
            if (data.hasRing) {
                const innerRadius = data.radius * 1.5;
                const outerRadius = data.radius * 2.5;
                const segments = 64;

                const ringGeometry = new THREE.RingGeometry(innerRadius, outerRadius, segments);
                const ringMaterial = new THREE.MeshStandardMaterial({
                    color: 0xCFAA88,
                    side: THREE.DoubleSide,
                    transparent: true,
                    opacity: 0.8,
                    roughness: 0.8,
                    metalness: 0.0
                });
                const ring = new THREE.Mesh(ringGeometry, ringMaterial);
                
                const ringGroup = new THREE.Object3D();
                ringGroup.rotation.x = -data.tilt;
                ringGroup.add(ring);
                planet.add(ringGroup);

                ring.rotation.x = Math.PI / 2;
            }
        }

        // console.log("Planets created. planetsRef.current length:", planetsRef.current.length); // デバッグログをコメントアウト

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        const onMouseMove = (event) => {
            mouse.x = (event.clientX / currentMount.clientWidth) * 2 - 1;
            mouse.y = - (event.clientY / currentMount.clientHeight) * 2 + 1;
        };

        const onClick = (event) => {
            // console.log("onClick called."); // デバッグログをコメントアウト
            if (!cameraRef.current) {
                // console.log("CameraRef.current is NULL at start of onClick."); // デバッグログをコメントアウト
                return;
            }

            raycaster.setFromCamera(mouse, cameraRef.current);
            const clickableObjects = planetsRef.current.map(p => p.mesh);
            // console.log("Clickable objects count:", clickableObjects.length); // デバッグログをコメントアウト

            const intersects = raycaster.intersectObjects(clickableObjects);

            if (intersects.length > 0) {
                intersects.sort((a, b) => a.distance - b.distance);
                const targetObject = intersects[0].object;
                // console.log("Intersection found. Target object:", targetObject.name); // デバッグログをコメントアウト

                let actualTargetPlanet = targetObject;
                let infoPanelDataKey = targetObject.name;

                if (targetObject.name === 'sun') {
                    // console.log("Sun clicked. Calling resetCameraView and displayPlanetInfo('sun')."); // デバッグログをコメントアウト
                    resetCameraView();
                    displayPlanetInfo('sun');
                    return;
                }
                
                if (targetObject.name === 'moon') {
                    const moonObjectData = planetsRef.current.find(p => p.mesh === targetObject);
                    const earthMesh = planetsRef.current.find(p => p.data.name === '地球')?.mesh;
                    
                    if (moonObjectData && earthMesh && moonObjectData.pivot.parent === earthMesh) {
                        if (isZoomedInRef.current && currentTargetPlanetRef.current?.name === 'earth') {
                            // 地球にズームインしている状態で月をクリックした場合、月にズームイン
                            actualTargetPlanet = targetObject;
                            infoPanelDataKey = 'moon';
                        } else {
                            // 地球全体にズームインしていない状態で月をクリックした場合、地球にズームイン
                            actualTargetPlanet = earthMesh;
                            infoPanelDataKey = 'earth';
                        }
                    } else {
                        // console.warn("Moon clicked, but not clearly associated with Earth or logic mismatch. Skipping."); // デバッグログをコメントアウト
                        return;
                    }
                }
                
                // console.log("Final infoPanelDataKey before PLANET_DATA lookup:", infoPanelDataKey); // デバッグログをコメントアウト

                const targetPlanetData = PLANET_DATA[infoPanelDataKey];
                if (!targetPlanetData) {
                    // console.warn("No PLANET_DATA found for key:", infoPanelDataKey, ". Skipping zoom."); // デバッグログをコメントアウト
                    return;
                }

                currentTargetPlanetRef.current = actualTargetPlanet;
                isZoomedInRef.current = true;

                const targetPosition = new THREE.Vector3();
                actualTargetPlanet.getWorldPosition(targetPosition);
                // console.log("Target planet's world position:", targetPosition); // デバッグログをコメントアウト

                let cameraTargetDistance;
                if (infoPanelDataKey === 'jupiter' || infoPanelDataKey === 'saturn') {
                    cameraTargetDistance = actualTargetPlanet.geometry.parameters.radius * 3;
                } else if (infoPanelDataKey === 'moon') {
                    cameraTargetDistance = actualTargetPlanet.geometry.parameters.radius * 5;
                } else {
                    cameraTargetDistance = actualTargetPlanet.geometry.parameters.radius * 3.0;
                }
                
                cameraTargetDistance = Math.max(cameraRef.current.far * 0.001, cameraTargetDistance);
                cameraTargetDistance = Math.min(cameraRef.current.far * 0.03, cameraTargetDistance);
                // console.log("Calculated cameraTargetDistance:", cameraTargetDistance); // デバッグログをコメントアウト

                const cameraTargetPosition = new THREE.Vector3();
                const currentCameraLookAt = new THREE.Vector3();
                cameraRef.current.getWorldDirection(currentCameraLookAt);
                cameraTargetPosition.copy(targetPosition).add(currentCameraLookAt.normalize().multiplyScalar(-cameraTargetDistance));

                // console.log("Calculated cameraTargetPosition:", cameraTargetPosition); // デバッグログをコメントアウト
                // console.log("Starting GSAP tween animation with cameraRef.current.position (FROM value):", cameraRef.current.position); // デバッグログをコメントアウト

                // 既存のカメラTweenがあれば停止
                if (currentCameraTween.current) {
                    currentCameraTween.current.kill();
                    currentCameraTween.current = null;
                    // console.log("Existing camera tween killed before new animation."); // デバッグログをコメントアウト
                }

                currentCameraTween.current = gsap.to(cameraRef.current.position, {
                    duration: 1.5,
                    x: cameraTargetPosition.x,
                    y: cameraTargetPosition.y,
                    z: cameraTargetPosition.z,
                    ease: "power2.out", // TWEEN.Easing.Quadratic.Out に近い
                    onUpdate: () => {
                        // console.log("GSAP Tween updating. Current camera position: x=", cameraRef.current.position.x, "y=", cameraRef.current.position.y, "z=", cameraRef.current.position.z);
                    },
                    onComplete: () => {
                        // console.log("GSAP Tween animation COMPLETE for:", actualTargetPlanet?.name); // デバッグログをコメントアウト
                        displayPlanetInfo(infoPanelDataKey);
                        cameraRef.current.lookAt(targetPosition);
                        currentCameraTween.current = null; // Tween完了後に参照をクリア
                    },
                    onInterrupt: () => { // GSAPでのonStopに相当 (途中で別のTweenが開始された場合)
                        // console.warn("GSAP Tween animation INTERRUPTED prematurely!"); // デバッグログをコメントアウト
                        currentCameraTween.current = null; // Tween停止後に参照をクリア
                    }
                });
                
                // console.log("GSAP Tween started."); // デバッグログをコメントアウト

            } else {
                // console.log("No intersection found."); // デバッグログをコメントアウト
            }
        };

        const onMouseWheel = (event) => {
            // console.log("Mouse wheel event detected. isZoomedInRef.current:", isZoomedInRef.current); // デバッグログをコメントアウト
            if (isZoomedInRef.current) return;
            if (!cameraRef.current) return;

            event.preventDefault();

            const zoomSpeed = 0.05;
            const direction = new THREE.Vector3();
            cameraRef.current.getWorldDirection(direction);

            if (event.deltaY > 0) {
                cameraRef.current.position.add(direction.multiplyScalar(zoomSpeed * cameraRef.current.position.length() * -1));
            } else {
                cameraRef.current.position.add(direction.multiplyScalar(zoomSpeed * cameraRef.current.position.length()));
            }

            const minZoom = 200;
            const maxZoom = 2500;
            const distanceToCenter = cameraRef.current.position.length();

            if (distanceToCenter < minZoom) {
                cameraRef.current.position.normalize().multiplyScalar(minZoom);
            } else if (distanceToCenter > maxZoom) {
                cameraRef.current.position.normalize().multiplyScalar(maxZoom);
            }
        };

        const onWindowResize = () => {
            if (!cameraRef.current || !rendererRef.current) return;
            cameraRef.current.aspect = currentMount.clientWidth / currentMount.clientHeight;
            cameraRef.current.updateProjectionMatrix();
            rendererRef.current.setSize(currentMount.clientWidth, currentMount.clientHeight);
        };

        currentMount.addEventListener('mousemove', onMouseMove, false);
        currentMount.addEventListener('click', onClick, false);
        currentMount.addEventListener('wheel', onMouseWheel, { passive: false });
        window.addEventListener('resize', onWindowResize, false);

        const animate = () => {
            requestAnimationFrame(animate);

            if (!isZoomedInRef.current) {
                planetsRef.current.forEach(p => {
                    // 月も通常時は公転・自転
                    if (p.data.isMoonData) {
                        p.pivot.rotation.y += p.data.orbitalSpeed;
                        p.mesh.rotation.y += 0.05;
                    } else if (p.pivot) { // 惑星の場合
                        p.pivot.rotation.y += p.data.orbitalSpeed;
                        p.mesh.rotation.y += 0.01;
                    } else if (p.mesh.name === 'sun') { // 太陽の場合
                        p.mesh.rotation.y += 0.005;
                    }
                });
            } else {
                // ズームイン中の場合、ターゲットの天体とその親天体（月の場合の地球）の自転のみ継続
                if (currentTargetPlanetRef.current) {
                    const targetName = currentTargetPlanetRef.current.name;
                    if (targetName === 'moon') {
                        // 月にズームインしている場合、月の自転は停止（この行を削除）
                        // currentTargetPlanetRef.current.rotation.y += 0.05;
                        // 月にズームインしている場合でも、地球は自転を続けるようにする
                        const earth = planetsRef.current.find(p => p.data.name === '地球')?.mesh;
                        if(earth) {
                            earth.rotation.y += 0.01; // 地球の自転は継続
                        }
                    } else if (targetName !== 'sun') {
                        // 惑星にズームインしている場合、その惑星の自転のみ継続
                        currentTargetPlanetRef.current.rotation.y += 0.01;
                        // 地球にズームインしている場合の月の運動も停止させるため、このブロックから月の処理を削除済み
                    } else if (targetName === 'sun') {
                        // 太陽にズームインしている場合、太陽の自転のみ継続
                        currentTargetPlanetRef.current.rotation.y += 0.005;
                    }
                }
            }

            if (currentTargetPlanetRef.current) {
                const targetPosition = new THREE.Vector3();
                currentTargetPlanetRef.current.getWorldPosition(targetPosition);
                cameraRef.current.lookAt(targetPosition);
            } else {
                cameraRef.current.lookAt(0, 0, 0);
            }

            rendererRef.current.render(scene, cameraRef.current);
        };
        animate();

        return () => {
            // console.log("Cleanup function called."); // デバッグログをコメントアウト
            gsap.globalTimeline.clear();
            // console.log("GSAP global timeline cleared during cleanup."); // デバッグログをコメントアウト

            if (currentMount) {
                currentMount.removeEventListener('mousemove', onMouseMove);
                currentMount.removeEventListener('click', onClick);
                currentMount.removeEventListener('wheel', onMouseWheel);
                window.removeEventListener('resize', onWindowResize);
                if (rendererRef.current && currentMount.contains(rendererRef.current.domElement)) {
                    currentMount.removeChild(rendererRef.current.domElement);
                }
            }
            if (scene) scene.clear();
            if (rendererRef.current) rendererRef.current.dispose();
        };
    }, [displayPlanetInfo, resetCameraView]);

    return (
        <div ref={mountRef} className={styles.solarSystemContainer}>
            <div className={styles.infoPanel} style={{ display: infoPanelVisible ? 'block' : 'none' }}>
                <h2>{infoPanelData.name}</h2>
                <p><strong>種類:</strong> <span>{infoPanelData.type}</span></p>
                <p><strong>大きさ:</strong> <span>{infoPanelData.size}</span></p>
                <p><strong>太陽からの距離:</strong> <span>{infoPanelData.distance}</span></p>
                <p><strong>公転周期:</strong> <span>{infoPanelData.orbitalPeriod}</span></p>
                <p><strong>特徴:</strong> <span>{infoPanelData.feature}</span></p>
                <button onClick={resetCameraView}>太陽系全体に戻る</button>
            </div>
        </div>
    );
};