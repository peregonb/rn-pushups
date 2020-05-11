import React, {useState} from 'react';
import {Text, View, StatusBar, Platform} from 'react-native';
import {Icon, TabBar} from '@ant-design/react-native';
import {SettingOutlined} from '@ant-design/icons';

export const MainLayout = () => {
    const statusBar = <StatusBar barStyle={Platform.OS === 'ios' ? "dark-content" : "lignt-content"}/>;
    const [selectedTab, setSelectedTab] = useState('redTab');
    const renderContent = pageText => {
        return (
            <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
                <Text style={{margin: 50}}>{pageText}</Text>
            </View>
        );
    };
    const onChangeTab = tabName => setSelectedTab(tabName);

    return (
        <>
            {statusBar}
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="#f5f5f5"
            >
                <TabBar.Item
                    title="Life"
                    icon={<Icon name="home"/>}
                    selected={selectedTab === 'blueTab'}
                    onPress={() => onChangeTab('blueTab')}
                >
                    {renderContent('Life Tab')}
                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon name="ordered-list"/>}
                    title="Koubei"
                    badge={2}
                    selected={selectedTab === 'redTab'}
                    onPress={() => onChangeTab('redTab')}
                >
                    {renderContent('Koubei Tab')}
                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon name="user"/>}
                    title="My"
                    selected={selectedTab === 'yellowTab'}
                    onPress={() => onChangeTab('yellowTab')}
                >
                    {renderContent('My Tab')}
                </TabBar.Item>
            </TabBar>
        </>
    );
};