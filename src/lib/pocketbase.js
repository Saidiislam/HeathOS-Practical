import PocketBase from 'pocketbase';

export const pb = new PocketBase('https://sharp-napkin.pockethost.io');
pb.autoCancellation(false)
