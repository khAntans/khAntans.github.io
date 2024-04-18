import * as THREE from 'three';

export function box(sizeX, sizeY, sizeZ, material) {
    const geometry = new THREE.BoxGeometry(sizeX, sizeY, sizeZ);
    return new THREE.Mesh(geometry, material);
}

export function plane(width, length, material) {
    const geometry = new THREE.PlaneGeometry(width, length);
    return new THREE.Mesh(geometry, material);
}