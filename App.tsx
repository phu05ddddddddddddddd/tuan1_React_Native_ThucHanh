import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';

import Header from './components/Header';
import Avatar from './components/Avatar';
import SearchField from './components/SearchField';
import InfoCard from './components/InfoCard';
import ActionButton from './components/ActionButton';

const STUDENT = {
  name: 'Nguyễn Minh Anh',
  code: 'Mã SV: 24CNTT001',
  email: 'minhanh@sv.edu.vn',
  className: 'CNTT-K24',
};

export default function App() {
  const [query, setQuery] = useState('');
  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);
    // Giả lập thao tác lưu hồ sơ.
    setTimeout(() => {
      setSaving(false);
      Alert.alert('Đã lưu', 'Hồ sơ sinh viên đã được lưu thành công.');
    }, 600);
  };

  const handleClear = () => {
    setQuery('');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.phoneFrame}>
        <Header title="SmartCampus" />

        {/* ScrollView để nội dung không tràn/không cuộn ngang trên màn hình hẹp */}
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          horizontal={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.profileRow}>
            <Avatar size={64} />
            <View style={styles.profileText}>
              <Text style={styles.name}>{STUDENT.name}</Text>
              <Text style={styles.code}>{STUDENT.code}</Text>
            </View>
          </View>

          <View style={styles.searchWrap}>
            <SearchField value={query} onChangeText={setQuery} />
          </View>

          <InfoCard
            title="Thông tin sinh viên"
            rows={[
              { label: 'Email', value: STUDENT.email },
              { label: 'Lớp', value: STUDENT.className },
            ]}
          />

          <View style={styles.actions}>
            <ActionButton
              label={saving ? 'ĐANG LƯU...' : 'LƯU HỒ SƠ'}
              onPress={handleSave}
              disabled={saving}
              variant="primary"
              accessibilityHint="Lưu thông tin hồ sơ sinh viên hiện tại"
            />
            <View style={{ height: 10 }} />
            <ActionButton
              label="XÓA TÌM KIẾM"
              onPress={handleClear}
              disabled={query.length === 0}
              variant="secondary"
              accessibilityHint="Xóa nội dung đã nhập trong ô tìm kiếm"
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  phoneFrame: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  profileText: {
    marginLeft: 14,
    flexShrink: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  code: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 2,
  },
  searchWrap: {
    marginTop: 16,
  },
  actions: {
    marginTop: 20,
  },
});
