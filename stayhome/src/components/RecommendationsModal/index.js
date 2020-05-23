import React, { useCallback } from 'react';
import Modal from 'react-native-modal';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons'; 
import styles from './styles';

import imgHands from '../../assets/recommendations/hands.png';
import imgQuare from '../../assets/recommendations/quarantine.png';
import imgBed from '../../assets/recommendations/bed.png';
import imgCough from '../../assets/recommendations/cough.png';
import imgMask from '../../assets/recommendations/mask.png';
import imgClean from '../../assets/recommendations/clean.png';

export default function RecommendationsModal({close, visible}) {

    return (
        <>
            <Modal isVisible={visible === 1}>
                <View style={styles.container}>
                    <Image style={styles.imgIco} source={imgHands}/>
                    <Text style={styles.title}>Lave as mãos com frequência</Text>
                    <View style={styles.space}>
                        <AntDesign style={styles.icon} name="rightcircle" size={16} color="#2694BB" />
                        <Text style={styles.info}><Text style={styles.bold}>Use água e sabão</Text>, especialmente se esteve em 
                            locais públicos, tossiu contra as mãos ou limpou o nariz. Se não tiver acesso a água e sabão no momento,
                            use <Text style={styles.bold}>álcool líquido</Text> de 60% a 80% ou <Text style={styles.bold}>álcool gel</Text> 70%</Text>
                    </View>
                    <View style={styles.space}>
                        <AntDesign style={styles.icon} name="rightcircle" size={16} color="#2694BB" />
                        <Text style={styles.info}><Text style={styles.bold}>Não toque os olhos, o nariz ou a boca</Text> sem ter lavado as mãos.</Text>
                    </View>

                    <TouchableOpacity onPress={() => close()} style={styles.btnClose}>
                        <Text style={styles.close}>FECHAR</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <Modal isVisible={visible === 2}>
                <View style={styles.container}>
                    <Image style={styles.imgIco} source={imgQuare}/>
                    <Text style={styles.title}>Evite contato</Text>
                    <View style={styles.space}>
                        <AntDesign style={styles.icon} name="rightcircle" size={16} color="#2694BB" />
                        <Text style={styles.info}><Text style={styles.bold}>Evite contato próximo</Text> com as pessoas.</Text>
                    </View>
                    <View style={styles.space}>
                        <AntDesign style={styles.icon} name="rightcircle" size={16} color="#2694BB" />
                        <Text style={styles.info}><Text style={styles.bold}>Mantenha distância</Text> de pelo menos um metro e meio se precisar ir a lugares públicos.
                        A doença já está disseminada em nossa região!</Text>
                    </View>

                    <TouchableOpacity onPress={() => close()} style={styles.btnClose}>
                        <Text style={styles.close}>FECHAR</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <Modal isVisible={visible === 3}>
                <View style={styles.container}>
                    <Image style={styles.imgIco} source={imgBed}/>
                    <Text style={styles.title}>Fique em casa se estiver doente</Text>
                    <View style={styles.space}>
                        <AntDesign style={styles.icon} name="rightcircle" size={16} color="#2694BB" />
                        <Text style={styles.info}>Se estiver com algum problema de saúde, <Text style={styles.bold}>fique em casa! </Text>Exceto se for para obter ajuda médica.</Text>
                    </View>

                    <TouchableOpacity onPress={() => close()} style={styles.btnClose}>
                        <Text style={styles.close}>FECHAR</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <Modal isVisible={visible === 4}>
                <View style={styles.container}>
                    <Image style={styles.imgIco} source={imgCough}/>
                    <Text style={styles.title}>Cubra a boca ao tossir</Text>
                    <View style={styles.space}>
                        <AntDesign style={styles.icon} name="rightcircle" size={16} color="#2694BB" />
                        <Text style={styles.info}><Text style={styles.bold}>Cubra a boca e o nariz</Text>com um lenço ao tossir ou espirrar ou use a parte interna do cotovelo.</Text>
                    </View>
                    <View style={styles.space}>
                        <AntDesign style={styles.icon} name="rightcircle" size={16} color="#2694BB" />
                        <Text style={styles.info}><Text style={styles.bold}>Jogue lenços usados</Text> no lixo.</Text>
                    </View>
                    <View style={styles.space}>
                        <AntDesign style={styles.icon} name="rightcircle" size={16} color="#2694BB" />
                        <Text style={styles.info}><Text style={styles.bold}>Lave as mãos ou o braço</Text> imediatamente se os usou para cobrir a tosse.</Text>
                    </View>

                    <TouchableOpacity onPress={() => close()} style={styles.btnClose}>
                        <Text style={styles.close}>FECHAR</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <Modal isVisible={visible === 5}>
                <View style={styles.container}>
                    <Image style={styles.imgIco} source={imgMask}/>
                    <Text style={styles.title}>Use máscara</Text>
                    <View style={styles.space}>
                        <AntDesign style={styles.icon} name="rightcircle" size={16} color="#2694BB" />
                        <Text style={styles.info}><Text style={styles.bold}>Use máscara</Text>quando estiver na presença de outras pessoas (por exemplo, na rua,
                        no carro, no supermercado) e também ao entrar em um hospital ou clínica. Se não puder usar uma máscara por algum motivo, você precisa lembar
                        de cobrir a tosse, não levar as mãos ao rosto e permanecer a um metro e meio dos demais.</Text>
                    </View>

                    <TouchableOpacity onPress={() => close()} style={styles.btnClose}>
                        <Text style={styles.close}>FECHAR</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <Modal isVisible={visible === 6}>
                <View style={styles.container}>
                    <Image style={styles.imgIco} source={imgClean}/>
                    <Text style={styles.title}>Limpe e desinfete</Text>
                    <View style={styles.space}>
                        <AntDesign style={styles.icon} name="rightcircle" size={16} color="#2694BB" />
                        <Text style={styles.info}><Text style={styles.bold}>Limpe e desinfete superfícies que você toca diariamente.</Text>
                        Isto inclui mesas, maçanetas, interruptores de luz, telefones, teclados, mouses, pias e torneiras.</Text>
                    </View>
                    <View style={styles.space}>
                        <AntDesign style={styles.icon} name="rightcircle" size={16} color="#2694BB" />
                        <Text style={styles.info}><Text style={styles.bold}>Se as superfícies estiverem sujas, limpe-as!</Text> 
                            Use detergente ou sabão e água antes de desinfetar.</Text>
                    </View>

                    <TouchableOpacity onPress={() => close()} style={styles.btnClose}>
                        <Text style={styles.close}>FECHAR</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </>
    );
}