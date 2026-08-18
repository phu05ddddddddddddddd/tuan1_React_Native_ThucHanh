import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type HeaderProps = {
  title: string;
};

/**
 * Header
 * Thanh tiêu đề trên cùng của màn hình, gồm logo (Image) và tên ứng dụng (Text).
 * Dùng View để bố cục ngang.
 */
export default function Header({ title }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
        accessible={false}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1D6FE0',
    paddingVertical: 14,
    paddingHorizontal: 16,
    gap: 10,
  },
  logo: {
    width: 28,
    height: 28,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
});
