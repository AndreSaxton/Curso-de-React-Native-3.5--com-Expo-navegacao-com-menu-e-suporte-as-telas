import React from 'react';
import { FlatList } from 'react-native'
import Item from './Item';
import StatusCarrinho from '../../componentes/StatusCarrinho';

// mocks
import { servicos } from '../../../mocks/servicos';

export default function Carrinho() {
    const total = servicos.reduce((soma, {preco, quantidade}) => soma + (preco * quantidade), 0);

    return <>
            <StatusCarrinho total={total}/>
            <FlatList
                data={servicos}
                removeClippedSubviews={false}
                renderItem={({item}) => <Item {...item}/>}
                keyExtractor={({id}) => String(id)}
                />
    </>
}